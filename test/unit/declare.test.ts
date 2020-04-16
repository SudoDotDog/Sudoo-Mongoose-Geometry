/**
 * @author WMXPY
 * @namespace Geometry
 * @description Declare
 * @override Unit Test
 */

import { Coordinate } from "@sudoo/geometry";
import { expect } from "chai";
import * as Chance from "chance";
import { createPointGeometry, parsePointGeometry, PointGeometry } from "../../src";

describe('Given [Declare] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-declare');

    it('should be able to convert coordinate to point geometry', (): void => {

        const longitude: number = chance.integer();
        const latitude: number = chance.integer();

        const coordinate: Coordinate = {
            latitude,
            longitude,
        };

        const geometry: PointGeometry = createPointGeometry(coordinate);

        expect(geometry).to.be.deep.equal({
            type: "Point",
            coordinates: [longitude, latitude],
        });
    });

    it('should be able to convert point geometry to coordinate', (): void => {

        const longitude: number = chance.integer();
        const latitude: number = chance.integer();

        const geometry: PointGeometry = {
            type: "Point",
            coordinates: [longitude, latitude],
        };

        const coordinate: Coordinate = parsePointGeometry(geometry);

        expect(coordinate).to.be.deep.equal({
            longitude,
            latitude,
        });
    });
});
