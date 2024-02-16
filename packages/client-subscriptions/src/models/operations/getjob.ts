/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetJobRequest = {
    /**
     * The unique identifier of the job.
     */
    jobUuid: string;
};

/**
 * Success. The job is returned.
 */
export type GetJobResponseBody = {
    data?: components.Job | undefined;
};

export type GetJobResponse = {
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
     * Success. The job is returned.
     */
    object?: GetJobResponseBody | undefined;
};

/** @internal */
export namespace GetJobRequest$ {
    export type Inbound = {
        job_uuid: string;
    };

    export const inboundSchema: z.ZodType<GetJobRequest, z.ZodTypeDef, Inbound> = z
        .object({
            job_uuid: z.string(),
        })
        .transform((v) => {
            return {
                jobUuid: v.job_uuid,
            };
        });

    export type Outbound = {
        job_uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobRequest> = z
        .object({
            jobUuid: z.string(),
        })
        .transform((v) => {
            return {
                job_uuid: v.jobUuid,
            };
        });
}

/** @internal */
export namespace GetJobResponseBody$ {
    export type Inbound = {
        data?: components.Job$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetJobResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.Job$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.Job$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobResponseBody> = z
        .object({
            data: components.Job$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace GetJobResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetJobResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetJobResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetJobResponseBody$.inboundSchema).optional(),
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
        object?: GetJobResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJobResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetJobResponseBody$.outboundSchema).optional(),
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
