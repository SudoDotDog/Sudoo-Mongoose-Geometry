/**
 * @author WMXPY
 * @namespace Geometry
 * @description Declare
 */

export type Coordinate = {

    readonly latitude: number;
    readonly longitude: number;
};

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
