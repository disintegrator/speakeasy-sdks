/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteSubscriberRequest = {
    /**
     * The unique identifier of the subscriber.
     */
    subscriberUuid: string;
};

export type DeleteSubscriberResponse = {
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
};

/** @internal */
export namespace DeleteSubscriberRequest$ {
    export type Inbound = {
        subscriber_uuid: string;
    };

    export const inboundSchema: z.ZodType<DeleteSubscriberRequest, z.ZodTypeDef, Inbound> = z
        .object({
            subscriber_uuid: z.string(),
        })
        .transform((v) => {
            return {
                subscriberUuid: v.subscriber_uuid,
            };
        });

    export type Outbound = {
        subscriber_uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSubscriberRequest> = z
        .object({
            subscriberUuid: z.string(),
        })
        .transform((v) => {
            return {
                subscriber_uuid: v.subscriberUuid,
            };
        });
}

/** @internal */
export namespace DeleteSubscriberResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteSubscriberResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSubscriberResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
