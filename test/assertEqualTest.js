// assertEqual.js
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
describe("#assertEqual", () => {
    it('returns false assertEqual("Lighthouse", "Labs") === false', () =>{
        assert.isFalse(assertEqual("Lighthouse", "Labs"));
    });
    it('returns true assertEqual(1,1) === true', () =>{
        assert.isTrue(assertEqual(1,1));
    });

});

