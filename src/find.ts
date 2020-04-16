/**
 * @author WMXPY
 * @namespace Geometry
 * @description Find
 */

import { Coordinate } from "@sudoo/geometry";
import { createPointGeometry, PointGeometry } from "./declare";

export type FindPointGeometryNearQuery = {

    readonly $near: {
        readonly $maxDistance: number;
        readonly $geometry: PointGeometry;
    };
};

export const createFindPointGeometryNearQuery = (coordinate: Coordinate, maxDistance: number): FindPointGeometryNearQuery => {

    return {
        $near: {
            $maxDistance: maxDistance,
            $geometry: createPointGeometry(coordinate),
        },
    };
};
