/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type ListSubscriptionInvoicesRequest = {
    /**
     * The unique identifier of the subscription.
     */
    subscriptionUuid: string;
};

/**
 * Success. A list of invoices is returned.
 */
export type ListSubscriptionInvoicesResponseBody = {
    data?: Array<components.SubscriptionInvoice> | undefined;
};

export type ListSubscriptionInvoicesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Success. A list of invoices is returned.
     */
    object?: ListSubscriptionInvoicesResponseBody | undefined;
};

/** @internal */
export namespace ListSubscriptionInvoicesRequest$ {
    export type Inbound = {
        subscription_uuid: string;
    };

    export const inboundSchema: z.ZodType<ListSubscriptionInvoicesRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                subscription_uuid: z.string(),
            })
            .transform((v) => {
                return {
                    subscriptionUuid: v.subscription_uuid,
                };
            });

    export type Outbound = {
        subscription_uuid: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSubscriptionInvoicesRequest
    > = z
        .object({
            subscriptionUuid: z.string(),
        })
        .transform((v) => {
            return {
                subscription_uuid: v.subscriptionUuid,
            };
        });
}

/** @internal */
export namespace ListSubscriptionInvoicesResponseBody$ {
    export type Inbound = {
        data?: Array<components.SubscriptionInvoice$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListSubscriptionInvoicesResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.array(components.SubscriptionInvoice$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Array<components.SubscriptionInvoice$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSubscriptionInvoicesResponseBody
    > = z
        .object({
            data: z.array(components.SubscriptionInvoice$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace ListSubscriptionInvoicesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: ListSubscriptionInvoicesResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListSubscriptionInvoicesResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                object: z
                    .lazy(() => ListSubscriptionInvoicesResponseBody$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.object === undefined ? null : { object: v.object }),
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: ListSubscriptionInvoicesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSubscriptionInvoicesResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => ListSubscriptionInvoicesResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
