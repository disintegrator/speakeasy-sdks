/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type NullablePrice = {
    /**
     * The value as a whole number of the currency's smallest subdivision.
     */
    amount: number;
    /**
     * Whether the amount includes any taxes.
     */
    includesTax?: boolean | undefined;
};

/** @internal */
export namespace NullablePrice$ {
    export type Inbound = {
        amount: number;
        includes_tax?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<NullablePrice, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.number().int(),
            includes_tax: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.includes_tax === undefined ? null : { includesTax: v.includes_tax }),
            };
        });

    export type Outbound = {
        amount: number;
        includes_tax?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NullablePrice> = z
        .object({
            amount: z.number().int(),
            includesTax: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.includesTax === undefined ? null : { includes_tax: v.includesTax }),
            };
        });
}
