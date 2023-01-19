const assert = require('chai').assert;
const map = require('../map');
describe("#map", () => {
    it('returns true for map(["ground", "control", "to", "major", "tom"], word () => word[0]) === ["g", "c", "t", "m", "t"]', () =>{
        const words = ["ground", "control", "to", "major", "tom"];
        const expected = ['g', 'c', 't', 'm', 't'];
        assert.deepEqual(map(words, word => word[0]), expected);
    });
    it('returns true for map([], word () => word[0]) === []', () =>{
        const words = [];
        const expected = [];
        assert.deepEqual(map(words, word => word[0]), expected);
    });


});

