/**
 * @author WMXPY
 * @namespace Geometry_Polygon
 * @description Find
 */

import { createGeoJsonPolygon, GeoJsonPolygon, PolygonCoordinate } from "@sudoo/geometry";

export type FindPolygonGeometryWithinQuery = {

    readonly $geoWithin: {
        readonly $geometry: GeoJsonPolygon;
    };
};

export const createFindPolygonGeometryWithinQuery = (polygon: PolygonCoordinate): FindPolygonGeometryWithinQuery => {

    return {
        $geoWithin: {
            $geometry: createGeoJsonPolygon(polygon),
        },
    };
};
