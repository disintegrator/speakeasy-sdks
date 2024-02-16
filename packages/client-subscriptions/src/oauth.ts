import { SDK_METADATA } from "./lib/config";
import * as z from "zod";

// TypeScript SDKs use Zod for runtime data validation. We can use this library
// to describe the shape of the response from the OAuth token endpoint. If the
// response is valid, we can safely access the token and its expiration time.
const tokenResponseSchema = z.object({
    access_token: z.string(),
    expires_in: z.number().positive(),
});

// This is a rough value that adjusts when we consider an access token to be
// expired. It is used to account for clock drift between the client and server
// and slow/unreliable network.
const tolerance = 5 * 60 * 1000;

/**
 * A callback function that can be used to obtain an OAuth access token for use
 * with SDKs that require OAuth security. A new token is requested from the
 * OAuth provider when the current token has expired.
 */
export function withImplicitAuthorization(
    clientID: string,
    options: { tokenStore?: TokenStore; url?: string } = {}
) {
    const {
        tokenStore = new InMemoryTokenStore(),
        // Replace this with your default OAuth provider's access token endpoint.
        url = "https://epcc-integration.global.ssl.fastly.net/oauth/access_token",
    } = options;

    return async (): Promise<string> => {
        const session = await tokenStore.get();

        // Return the current token if it has not expired yet.
        if (session && session.expires > Date.now()) {
            return session.token;
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    // Include the SDK's user agent in the request so requests can be
                    // tracked using observability infrastructure.
                    "user-agent": SDK_METADATA.userAgent,
                },
                body: new URLSearchParams({
                    client_id: clientID,
                    grant_type: "implicit",
                }),
            });

            if (!response.ok) {
                throw new Error("Unexpected status code: " + response.status);
            }

            const json = await response.json();
            const data = tokenResponseSchema.parse(json);

            await tokenStore.set(
                data.access_token,
                Date.now() + data.expires_in * 1000 - tolerance
            );

            return data.access_token;
        } catch (error) {
            throw new Error("Failed to obtain OAuth token: " + error);
        }
    };
}

export function withClientCredentialAuthorization(
    clientID: string,
    clientSecret: string,
    options: { tokenStore?: TokenStore; url?: string } = {}
) {
    const {
        tokenStore = new InMemoryTokenStore(),
        // Replace this with your default OAuth provider's access token endpoint.
        url = "https://epcc-integration.global.ssl.fastly.net/oauth/access_token",
    } = options;

    return async (): Promise<string> => {
        const session = await tokenStore.get();

        // Return the current token if it has not expired yet.
        if (session && session.expires > Date.now()) {
            return session.token;
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    // Include the SDK's user agent in the request so requests can be
                    // tracked using observability infrastructure.
                    "user-agent": SDK_METADATA.userAgent,
                },
                body: new URLSearchParams({
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: "client_credentials",
                }),
            });

            if (!response.ok) {
                throw new Error("Unexpected status code: " + response.status);
            }

            const json = await response.json();
            const data = tokenResponseSchema.parse(json);

            await tokenStore.set(
                data.access_token,
                Date.now() + data.expires_in * 1000 - tolerance
            );

            return data.access_token;
        } catch (error) {
            throw new Error("Failed to obtain OAuth token: " + error);
        }
    };
}

/**
 * A TokenStore is used to save and retrieve OAuth tokens for use across SDK
 * method calls. This interface can be implemented to store tokens in memory,
 * a shared cache like Redis or a database table.
 */
export interface TokenStore {
    get(): Promise<{ token: string; expires: number } | undefined>;
    set(token: string, expires: number): Promise<void>;
}

/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
export class InMemoryTokenStore implements TokenStore {
    private token = "";
    private expires = Date.now();

    constructor() {}

    async get() {
        return { token: this.token, expires: this.expires };
    }

    async set(token: string, expires: number) {
        this.token = token;
        this.expires = expires;
    }
}

export class InLocalStorageTokenStore implements TokenStore {

    constructor() {}

    async get() {
        const raw = localStorage.getItem("ep-ts-sdk-credentials")
        const parsed = raw && JSON.parse(raw);
        return parsed ? { token: parsed.token, expires: parsed.expires } : undefined;
    }

    async set(token: string, expires: number) {
        localStorage.setItem("ep-ts-sdk-credentials", JSON.stringify({ token, expires }));
    }
}