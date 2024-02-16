/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type InvoiceTimestamps = {
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
    /**
     * The date and time a payment was taken.
     */
    paymentTakenAt?: string | undefined;
};

/** @internal */
export namespace InvoiceTimestamps$ {
    export type Inbound = {
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
        payment_taken_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<InvoiceTimestamps, z.ZodTypeDef, Inbound> = z
        .object({
            updated_at: z.string(),
            created_at: z.string(),
            canceled_at: z.nullable(z.string()),
            payment_taken_at: z.string().optional(),
        })
        .transform((v) => {
            return {
                updatedAt: v.updated_at,
                createdAt: v.created_at,
                canceledAt: v.canceled_at,
                ...(v.payment_taken_at === undefined
                    ? null
                    : { paymentTakenAt: v.payment_taken_at }),
            };
        });

    export type Outbound = {
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
        payment_taken_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvoiceTimestamps> = z
        .object({
            updatedAt: z.string(),
            createdAt: z.string(),
            canceledAt: z.nullable(z.string()),
            paymentTakenAt: z.string().optional(),
        })
        .transform((v) => {
            return {
                updated_at: v.updatedAt,
                created_at: v.createdAt,
                canceled_at: v.canceledAt,
                ...(v.paymentTakenAt === undefined ? null : { payment_taken_at: v.paymentTakenAt }),
            };
        });
}
