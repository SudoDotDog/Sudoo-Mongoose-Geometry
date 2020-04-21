/**
 * @author WMXPY
 * @namespace Geometry_Polygon
 * @description Find
 */

import { Coordinate, createGeoJsonPolygon, GeoJsonPolygon } from "@sudoo/geometry";

export type FindPolygonGeometryWithinQuery = {

    readonly $geoWithin: {
        readonly $geometry: GeoJsonPolygon;
    };
};

export const createFindPolygonGeometryWithinQuery = (polygon: Coordinate[][]): FindPolygonGeometryWithinQuery => {

    return {
        $geoWithin: {
            $geometry: createGeoJsonPolygon(polygon),
        },
    };
};
