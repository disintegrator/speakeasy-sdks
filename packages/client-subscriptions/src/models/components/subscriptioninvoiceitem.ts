/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SingleCurrencyPrice, SingleCurrencyPrice$ } from "./singlecurrencyprice";
import { z } from "zod";

export type SubscriptionInvoiceItem = {
    /**
     * A description of the subscribed item.
     */
    description: string;
    /**
     * A price in a single currency.
     */
    price: SingleCurrencyPrice;
};

/** @internal */
export namespace SubscriptionInvoiceItem$ {
    export type Inbound = {
        description: string;
        price: SingleCurrencyPrice$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriptionInvoiceItem, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string(),
            price: SingleCurrencyPrice$.inboundSchema,
        })
        .transform((v) => {
            return {
                description: v.description,
                price: v.price,
            };
        });

    export type Outbound = {
        description: string;
        price: SingleCurrencyPrice$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionInvoiceItem> = z
        .object({
            description: z.string(),
            price: SingleCurrencyPrice$.outboundSchema,
        })
        .transform((v) => {
            return {
                description: v.description,
                price: v.price,
            };
        });
}
