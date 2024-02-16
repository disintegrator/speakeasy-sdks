/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Price, Price$ } from "./price";
import { PriceUnits, PriceUnits$ } from "./priceunits";
import { z } from "zod";

export type ProductResponseAttributes = {
    /**
     * A unique attribute that you could use to contain information from another company system, for example. The maximum length is 2048 characters.
     */
    externalRef?: string | undefined;
    /**
     * The name of the product.
     */
    name: string;
    /**
     * The product or service description to display to customers.
     */
    description?: string | undefined;
    /**
     * A stock keeping unit for the product, if appropriate.
     */
    sku?: string | undefined;
    /**
     * A URL from which an image or file for the product can be fetched. You can either upload your images and files to Commerce using the Commerce Files API or you can use your own content delivery network. If you are using the Commerce Files API, use [**Create a File**](https://elasticpath.dev/docs/pxm/products/product-assets/create-a-file) to upload your file and return an HREF link in the response. An extensive range of [**media and file extensions**](https://elasticpath.dev/docs/pxm/products/product-assets/files-overview) are supported.
     */
    mainImage?: string | undefined;
    price?: Record<string, Price> | undefined;
    /**
     * The timeframe during which the product price is applicable. For example, for a streaming service, the price is $12.99 and the `unit` is `months` and the `amount` is `1`. In other words, the streaming service is available for $12.99 a month. You may want to specify a unit price if you have many products that all have different prices. Rather than having to create separate plans for each product, you can specify the timeframe during which the product price is applicable and then create one plan that determines the billing frequency for those products.
     */
    priceUnits?: PriceUnits | undefined;
    /**
     * The date and time a resource was updated.
     */
    updatedAt: string;
    /**
     * The date and time a resource was created.
     */
    createdAt: string;
    /**
     * The date and time a resource was cancelled.
     */
    canceledAt: string | null;
};

/** @internal */
export namespace ProductResponseAttributes$ {
    export type Inbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        sku?: string | undefined;
        main_image?: string | undefined;
        price?: Record<string, Price$.Inbound> | undefined;
        price_units?: PriceUnits$.Inbound | undefined;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const inboundSchema: z.ZodType<ProductResponseAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            external_ref: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            sku: z.string().optional(),
            main_image: z.string().optional(),
            price: z.record(Price$.inboundSchema).optional(),
            price_units: PriceUnits$.inboundSchema.optional(),
            updated_at: z.string(),
            created_at: z.string(),
            canceled_at: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.external_ref === undefined ? null : { externalRef: v.external_ref }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.main_image === undefined ? null : { mainImage: v.main_image }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.price_units === undefined ? null : { priceUnits: v.price_units }),
                updatedAt: v.updated_at,
                createdAt: v.created_at,
                canceledAt: v.canceled_at,
            };
        });

    export type Outbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        sku?: string | undefined;
        main_image?: string | undefined;
        price?: Record<string, Price$.Outbound> | undefined;
        price_units?: PriceUnits$.Outbound | undefined;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductResponseAttributes> = z
        .object({
            externalRef: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            sku: z.string().optional(),
            mainImage: z.string().optional(),
            price: z.record(Price$.outboundSchema).optional(),
            priceUnits: PriceUnits$.outboundSchema.optional(),
            updatedAt: z.string(),
            createdAt: z.string(),
            canceledAt: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.externalRef === undefined ? null : { external_ref: v.externalRef }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.mainImage === undefined ? null : { main_image: v.mainImage }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.priceUnits === undefined ? null : { price_units: v.priceUnits }),
                updated_at: v.updatedAt,
                created_at: v.createdAt,
                canceled_at: v.canceledAt,
            };
        });
}
