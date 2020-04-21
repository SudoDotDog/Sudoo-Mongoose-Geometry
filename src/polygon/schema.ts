/**
 * @author WMXPY
 * @namespace Geometry_Polygon
 * @description Schema
 */

import { GeoJsonPolygon } from "@sudoo/geometry";
import { Schema, SchemaTypeOpts } from "mongoose";

export const createPolygonGeometrySchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<Schema<GeoJsonPolygon>> => {

    return {
        type: createPolygonGeometrySchema(),
        required,
        index: index ? '2dsphere' : false,
    };
};

export const createNotIndexedPolygonGeometrySchemaType = (required: boolean = false): SchemaTypeOpts<Schema<GeoJsonPolygon>> => {

    return {
        type: createPolygonGeometrySchema(),
        required,
    };
};

export const createPolygonGeometrySchema = (): Schema<GeoJsonPolygon> => {

    return new Schema({

        type: {
            type: String,
            enum: ['Polygon'],
            required: true,
        },
        coordinates: {
            type: [[[Number]]],
            required: true,
        },
    }, { _id: false });
};
