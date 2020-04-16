/**
 * @author WMXPY
 * @namespace Geometry
 * @description Declare
 */

import { Coordinate } from "@sudoo/geometry";

export type PointGeometry = {

    readonly type: "Point";
    readonly coordinates: [number, number];
};

export const createPointGeometry = (coordinate: Coordinate): PointGeometry => {

    return {
        type: 'Point',
        coordinates: [coordinate.longitude, coordinate.latitude],
    };
};

export const parsePointGeometry = (geometry: PointGeometry): Coordinate => {

    const longitude: number = geometry.coordinates[0];
    const latitude: number = geometry.coordinates[1];

    return {
        latitude,
        longitude,
    };
};
