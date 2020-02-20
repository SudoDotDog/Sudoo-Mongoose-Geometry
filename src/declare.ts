/**
 * @author WMXPY
 * @namespace Geometry
 * @description Declare
 */

export type Coordinate = {

    latitude: number;
    longitude: number;
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
