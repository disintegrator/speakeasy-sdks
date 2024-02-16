/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteOfferingProductRequest = {
    /**
     * The unique identifier of the offering.
     */
    offeringUuid: string;
    /**
     * The unique identifier of the product.
     */
    productUuid: string;
};

export type DeleteOfferingProductResponse = {
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
export namespace DeleteOfferingProductRequest$ {
    export type Inbound = {
        offering_uuid: string;
        product_uuid: string;
    };

    export const inboundSchema: z.ZodType<DeleteOfferingProductRequest, z.ZodTypeDef, Inbound> = z
        .object({
            offering_uuid: z.string(),
            product_uuid: z.string(),
        })
        .transform((v) => {
            return {
                offeringUuid: v.offering_uuid,
                productUuid: v.product_uuid,
            };
        });

    export type Outbound = {
        offering_uuid: string;
        product_uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteOfferingProductRequest> = z
        .object({
            offeringUuid: z.string(),
            productUuid: z.string(),
        })
        .transform((v) => {
            return {
                offering_uuid: v.offeringUuid,
                product_uuid: v.productUuid,
            };
        });
}

/** @internal */
export namespace DeleteOfferingProductResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteOfferingProductResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteOfferingProductResponse> =
        z
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
