/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type UpdateScheduleRequestBody = {
    data: components.ScheduleUpdate;
};

export type UpdateScheduleRequest = {
    /**
     * The unique identifier of the schedule.
     */
    scheduleUuid: string;
    requestBody?: UpdateScheduleRequestBody | undefined;
};

/**
 * Success. The schedule details are returned.
 */
export type UpdateScheduleResponseBody = {
    data?: components.Schedule | undefined;
};

export type UpdateScheduleResponse = {
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
     * Success. The schedule details are returned.
     */
    object?: UpdateScheduleResponseBody | undefined;
};

/** @internal */
export namespace UpdateScheduleRequestBody$ {
    export type Inbound = {
        data: components.ScheduleUpdate$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateScheduleRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.ScheduleUpdate$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.ScheduleUpdate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateScheduleRequestBody> = z
        .object({
            data: components.ScheduleUpdate$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace UpdateScheduleRequest$ {
    export type Inbound = {
        schedule_uuid: string;
        RequestBody?: UpdateScheduleRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateScheduleRequest, z.ZodTypeDef, Inbound> = z
        .object({
            schedule_uuid: z.string(),
            RequestBody: z.lazy(() => UpdateScheduleRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                scheduleUuid: v.schedule_uuid,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        schedule_uuid: string;
        RequestBody?: UpdateScheduleRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateScheduleRequest> = z
        .object({
            scheduleUuid: z.string(),
            requestBody: z.lazy(() => UpdateScheduleRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                schedule_uuid: v.scheduleUuid,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace UpdateScheduleResponseBody$ {
    export type Inbound = {
        data?: components.Schedule$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateScheduleResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.Schedule$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.Schedule$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateScheduleResponseBody> = z
        .object({
            data: components.Schedule$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace UpdateScheduleResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateScheduleResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateScheduleResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateScheduleResponseBody$.inboundSchema).optional(),
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
        object?: UpdateScheduleResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateScheduleResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UpdateScheduleResponseBody$.outboundSchema).optional(),
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
