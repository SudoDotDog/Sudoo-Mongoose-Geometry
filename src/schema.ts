/**
 * @author WMXPY
 * @namespace Geometry
 * @description Schema
 */

import { Schema, SchemaTypeOpts } from "mongoose";

export const createPointGeometrySchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<any> => {

    return {
        type: createPointGeometrySchema(),
        required,
        index: index ? '2dsphere' : false,
    };
};

export const createPointGeometrySchema = (): Schema => {

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
