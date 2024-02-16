/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type AttachOfferingProductRequestBody = {
    /**
     * A list of product IDs to attach to the offering. See [**List Products**](#tag/Products/operation/ListProducts).
     */
    data: components.OfferingProductAttach;
};

export type AttachOfferingProductRequest = {
    /**
     * The unique identifier of the offering.
     */
    offeringUuid: string;
    requestBody?: AttachOfferingProductRequestBody | undefined;
};

/**
 * Success. The subscription product is attached with the offering.
 */
export type AttachOfferingProductResponseBody = {
    data?: Array<components.OfferingProduct> | undefined;
};

export type AttachOfferingProductResponse = {
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
     * Success. The subscription product is attached with the offering.
     */
    object?: AttachOfferingProductResponseBody | undefined;
};

/** @internal */
export namespace AttachOfferingProductRequestBody$ {
    export type Inbound = {
        data: components.OfferingProductAttach$.Inbound;
    };

    export const inboundSchema: z.ZodType<AttachOfferingProductRequestBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                data: components.OfferingProductAttach$.inboundSchema,
            })
            .transform((v) => {
                return {
                    data: v.data,
                };
            });

    export type Outbound = {
        data: components.OfferingProductAttach$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AttachOfferingProductRequestBody
    > = z
        .object({
            data: components.OfferingProductAttach$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace AttachOfferingProductRequest$ {
    export type Inbound = {
        offering_uuid: string;
        RequestBody?: AttachOfferingProductRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AttachOfferingProductRequest, z.ZodTypeDef, Inbound> = z
        .object({
            offering_uuid: z.string(),
            RequestBody: z.lazy(() => AttachOfferingProductRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offeringUuid: v.offering_uuid,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        offering_uuid: string;
        RequestBody?: AttachOfferingProductRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingProductRequest> = z
        .object({
            offeringUuid: z.string(),
            requestBody: z.lazy(() => AttachOfferingProductRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offering_uuid: v.offeringUuid,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace AttachOfferingProductResponseBody$ {
    export type Inbound = {
        data?: Array<components.OfferingProduct$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        AttachOfferingProductResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.array(components.OfferingProduct$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Array<components.OfferingProduct$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AttachOfferingProductResponseBody
    > = z
        .object({
            data: z.array(components.OfferingProduct$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace AttachOfferingProductResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: AttachOfferingProductResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AttachOfferingProductResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => AttachOfferingProductResponseBody$.inboundSchema).optional(),
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
        object?: AttachOfferingProductResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingProductResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => AttachOfferingProductResponseBody$.outboundSchema).optional(),
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
