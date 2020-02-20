/**
 * @author WMXPY
 * @namespace Geometry
 * @description Placeholder
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";

describe('Given [Placeholder] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-placeholder');

    it('should', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
