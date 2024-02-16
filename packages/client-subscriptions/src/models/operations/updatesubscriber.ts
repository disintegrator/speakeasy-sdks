/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type UpdateSubscriberRequestBody = {
    data: components.SubscriberUpdate;
};

export type UpdateSubscriberRequest = {
    /**
     * The unique identifier of the subscriber.
     */
    subscriberUuid: string;
    requestBody?: UpdateSubscriberRequestBody | undefined;
};

/**
 * Success. The subscriber details are returned.
 */
export type UpdateSubscriberResponseBody = {
    data?: components.Subscriber | undefined;
};

export type UpdateSubscriberResponse = {
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
     * Success. The subscriber details are returned.
     */
    object?: UpdateSubscriberResponseBody | undefined;
};

/** @internal */
export namespace UpdateSubscriberRequestBody$ {
    export type Inbound = {
        data: components.SubscriberUpdate$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateSubscriberRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.SubscriberUpdate$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.SubscriberUpdate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSubscriberRequestBody> = z
        .object({
            data: components.SubscriberUpdate$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace UpdateSubscriberRequest$ {
    export type Inbound = {
        subscriber_uuid: string;
        RequestBody?: UpdateSubscriberRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSubscriberRequest, z.ZodTypeDef, Inbound> = z
        .object({
            subscriber_uuid: z.string(),
            RequestBody: z.lazy(() => UpdateSubscriberRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                subscriberUuid: v.subscriber_uuid,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        subscriber_uuid: string;
        RequestBody?: UpdateSubscriberRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSubscriberRequest> = z
        .object({
            subscriberUuid: z.string(),
            requestBody: z.lazy(() => UpdateSubscriberRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                subscriber_uuid: v.subscriberUuid,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace UpdateSubscriberResponseBody$ {
    export type Inbound = {
        data?: components.Subscriber$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSubscriberResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.Subscriber$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.Subscriber$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSubscriberResponseBody> = z
        .object({
            data: components.Subscriber$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace UpdateSubscriberResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateSubscriberResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSubscriberResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateSubscriberResponseBody$.inboundSchema).optional(),
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
        object?: UpdateSubscriberResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSubscriberResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UpdateSubscriberResponseBody$.outboundSchema).optional(),
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
