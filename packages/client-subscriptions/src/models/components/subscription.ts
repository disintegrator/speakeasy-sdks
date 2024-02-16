/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Relationship, Relationship$ } from "./relationship";
import { SubscriptionAttributes, SubscriptionAttributes$ } from "./subscriptionattributes";
import { SubscriptionMeta, SubscriptionMeta$ } from "./subscriptionmeta";
import { SubscriptionType, SubscriptionType$ } from "./subscriptiontype";
import { z } from "zod";

export type Subscription = {
    /**
     * The unique identifier.
     */
    id?: string | undefined;
    type?: SubscriptionType | undefined;
    attributes: SubscriptionAttributes;
    /**
     * Relationships are established between different subscription entities. For example, a product and a plan are related to an offering, as both are attached to it.
     */
    relationships?: Record<string, Relationship> | undefined;
    meta: SubscriptionMeta;
};

/** @internal */
export namespace Subscription$ {
    export type Inbound = {
        id?: string | undefined;
        type?: SubscriptionType | undefined;
        attributes: SubscriptionAttributes$.Inbound;
        relationships?: Record<string, Relationship$.Inbound> | undefined;
        meta: SubscriptionMeta$.Inbound;
    };

    export const inboundSchema: z.ZodType<Subscription, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionType$.default(SubscriptionType.Subscription),
            attributes: SubscriptionAttributes$.inboundSchema,
            relationships: z.record(Relationship$.inboundSchema).optional(),
            meta: SubscriptionMeta$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                type: v.type,
                attributes: v.attributes,
                ...(v.relationships === undefined ? null : { relationships: v.relationships }),
                meta: v.meta,
            };
        });

    export type Outbound = {
        id?: string | undefined;
        type: SubscriptionType;
        attributes: SubscriptionAttributes$.Outbound;
        relationships?: Record<string, Relationship$.Outbound> | undefined;
        meta: SubscriptionMeta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Subscription> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionType$.default(SubscriptionType.Subscription),
            attributes: SubscriptionAttributes$.outboundSchema,
            relationships: z.record(Relationship$.outboundSchema).optional(),
            meta: SubscriptionMeta$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                type: v.type,
                attributes: v.attributes,
                ...(v.relationships === undefined ? null : { relationships: v.relationships }),
                meta: v.meta,
            };
        });
}
