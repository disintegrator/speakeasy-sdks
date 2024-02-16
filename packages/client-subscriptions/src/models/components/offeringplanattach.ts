/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * A list of plan IDs to attach to the offering. See [**List Plans**](#tag/Plans/operation/ListPlans).
 */
export type OfferingPlanAttach = {
    plans: Array<string>;
};

/** @internal */
export namespace OfferingPlanAttach$ {
    export type Inbound = {
        plans: Array<string>;
    };

    export const inboundSchema: z.ZodType<OfferingPlanAttach, z.ZodTypeDef, Inbound> = z
        .object({
            plans: z.array(z.string()),
        })
        .transform((v) => {
            return {
                plans: v.plans,
            };
        });

    export type Outbound = {
        plans: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferingPlanAttach> = z
        .object({
            plans: z.array(z.string()),
        })
        .transform((v) => {
            return {
                plans: v.plans,
            };
        });
}
