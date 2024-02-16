/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OfferingAttributes, OfferingAttributes$ } from "./offeringattributes";
import { Relationship, Relationship$ } from "./relationship";
import { SubscriptionOfferingType, SubscriptionOfferingType$ } from "./subscriptionofferingtype";
import { z } from "zod";

export type OfferingCreate = {
    type?: SubscriptionOfferingType | undefined;
    attributes: OfferingAttributes;
    /**
     * Relationships are established between different subscription entities. For example, a product and a plan are related to an offering, as both are attached to it.
     */
    relationships?: Record<string, Relationship> | undefined;
};

/** @internal */
export namespace OfferingCreate$ {
    export type Inbound = {
        type?: SubscriptionOfferingType | undefined;
        attributes: OfferingAttributes$.Inbound;
        relationships?: Record<string, Relationship$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<OfferingCreate, z.ZodTypeDef, Inbound> = z
        .object({
            type: SubscriptionOfferingType$.default(SubscriptionOfferingType.SubscriptionOffering),
            attributes: OfferingAttributes$.inboundSchema,
            relationships: z.record(Relationship$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                attributes: v.attributes,
                ...(v.relationships === undefined ? null : { relationships: v.relationships }),
            };
        });

    export type Outbound = {
        type: SubscriptionOfferingType;
        attributes: OfferingAttributes$.Outbound;
        relationships?: Record<string, Relationship$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferingCreate> = z
        .object({
            type: SubscriptionOfferingType$.default(SubscriptionOfferingType.SubscriptionOffering),
            attributes: OfferingAttributes$.outboundSchema,
            relationships: z.record(Relationship$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                attributes: v.attributes,
                ...(v.relationships === undefined ? null : { relationships: v.relationships }),
            };
        });
}
