/**
 * @author WMXPY
 * @namespace Geometry
 * @description Declare
 * @override Unit Test
 */

import { Coordinate, createCoordinate, createGeoJsonPoint } from "@sudoo/geometry";
import { expect } from "chai";
import * as Chance from "chance";
import { createFindPointGeometryNearQuery, FindPointGeometryNearQuery } from "../../../src";

describe('Given [Find] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-find');

    it('should be able to create find query', (): void => {

        const coordinate: Coordinate = createCoordinate(chance.integer(), chance.integer());
        const distance: number = chance.integer();

        const query: FindPointGeometryNearQuery = createFindPointGeometryNearQuery(coordinate, distance);

        expect(query).to.be.deep.equal({
            $near: {
                $maxDistance: distance,
                $geometry: createGeoJsonPoint(coordinate),
            },
        });
    });
});
