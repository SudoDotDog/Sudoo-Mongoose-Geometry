/**
 * @author WMXPY
 * @namespace Geometry_Multi_Polygon
 * @description Schema
 */

import { GeoJsonMultiPolygon } from "@sudoo/geometry";
import { Schema, SchemaTypeOpts } from "mongoose";

export const createMultiPolygonGeometrySchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<Schema<GeoJsonMultiPolygon>> => {

    return {
        type: createMultiPolygonGeometrySchema(),
        required,
        index: index ? '2dsphere' : false,
    };
};

export const createNotIndexedMultiPolygonGeometrySchemaType = (required: boolean = false): SchemaTypeOpts<Schema<GeoJsonMultiPolygon>> => {

    return {
        type: createMultiPolygonGeometrySchema(),
        required,
    };
};

export const createMultiPolygonGeometrySchema = (): Schema<GeoJsonMultiPolygon> => {

    return new Schema({

        type: {
            type: String,
            enum: ['MultiPolygon'],
            required: true,
        },
        coordinates: {
            type: [[[[Number]]]],
            required: true,
        },
    }, { _id: false });
};
