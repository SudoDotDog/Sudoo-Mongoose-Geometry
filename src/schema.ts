/**
 * @author WMXPY
 * @namespace Geometry
 * @description Schema
 */

import { GeoJsonPoint } from "@sudoo/geometry";
import { Schema, SchemaTypeOpts } from "mongoose";

export const createPointGeometrySchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<Schema<GeoJsonPoint>> => {

    return {
        type: createPointGeometrySchema(),
        required,
        index: index ? '2dsphere' : false,
    };
};

export const createNotIndexedPointGeometrySchemaType = (required: boolean = false): SchemaTypeOpts<Schema<GeoJsonPoint>> => {

    return {
        type: createPointGeometrySchema(),
        required,
    };
};

export const createPointGeometrySchema = (): Schema<GeoJsonPoint> => {

    return new Schema({

        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    }, { _id: false });
};
