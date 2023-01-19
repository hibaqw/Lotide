const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;
describe("#eqArray", () => {
    it('returns true for eqArrays([1,2,3],[1,2,3])', () =>{
        assert.isTrue(eqArrays([1,2,"cat"], [1,2,"cat"]));
    });
    it('returns false for eqArrays([1,2,3],[3,2,1])', () =>{
        assert.isFalse(eqArrays([1,2,3], [3,2,1]));
    });
    it('returns true for eqArrays([],[])', () =>{
        assert.isTrue(eqArrays([], []));
    });


});