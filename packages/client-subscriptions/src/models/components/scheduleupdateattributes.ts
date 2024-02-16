/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ScheduleJob, ScheduleJob$ } from "./schedulejob";
import { z } from "zod";

export type ScheduleUpdateAttributes = {
    /**
     * A unique attribute that you could use to contain information from another company system, for example. The maximum length is 2048 characters.
     */
    externalRef?: string | null | undefined;
    /**
     * The name of the schedule.
     */
    name?: string | null | undefined;
    /**
     * A cron-style specification of when the jobs should be created.
     */
    specification?: string | undefined;
    /**
     * The location of the time zone that the schedule operates in.
     */
    location?: string | undefined;
    job?: ScheduleJob | undefined;
};

/** @internal */
export namespace ScheduleUpdateAttributes$ {
    export type Inbound = {
        external_ref?: string | null | undefined;
        name?: string | null | undefined;
        specification?: string | undefined;
        location?: string | undefined;
        job?: ScheduleJob$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ScheduleUpdateAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            external_ref: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            specification: z.string().optional(),
            location: z.string().optional(),
            job: ScheduleJob$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.external_ref === undefined ? null : { externalRef: v.external_ref }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.specification === undefined ? null : { specification: v.specification }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.job === undefined ? null : { job: v.job }),
            };
        });

    export type Outbound = {
        external_ref?: string | null | undefined;
        name?: string | null | undefined;
        specification?: string | undefined;
        location?: string | undefined;
        job?: ScheduleJob$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScheduleUpdateAttributes> = z
        .object({
            externalRef: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            specification: z.string().optional(),
            location: z.string().optional(),
            job: ScheduleJob$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalRef === undefined ? null : { external_ref: v.externalRef }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.specification === undefined ? null : { specification: v.specification }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.job === undefined ? null : { job: v.job }),
            };
        });
}
