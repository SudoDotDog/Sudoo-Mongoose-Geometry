/**
 * @author WMXPY
 * @namespace Geometry_Point
 * @description Find
 */

import { Coordinate, createGeoJsonPoint, GeoJsonPoint } from "@sudoo/geometry";

export type FindPointGeometryNearQuery = {

    readonly $near: {
        readonly $maxDistance: number;
        readonly $geometry: GeoJsonPoint;
    };
};

export type FindPointGeometryIntersectsQuery = {

    readonly $geoIntersects: {
        readonly $geometry: GeoJsonPoint;
    };
};

export const createFindPointGeometryNearQuery = (coordinate: Coordinate, maxDistance: number): FindPointGeometryNearQuery => {

    return {
        $near: {
            $maxDistance: maxDistance,
            $geometry: createGeoJsonPoint(coordinate),
        },
    };
};

export const createFindPointGeometryIntersectsQuery = (coordinate: Coordinate): FindPointGeometryIntersectsQuery => {

    return {
        $geoIntersects: {
            $geometry: createGeoJsonPoint(coordinate),
        },
    };
};
