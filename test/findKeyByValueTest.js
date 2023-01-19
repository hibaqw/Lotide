const assert = require('chai').assert;
const findKeyByValue= require('../findKeyByValue');


describe("#findKeyByValue", () => {
    it('returns true for findByValue(bestShowsByGenre, \'The Wire\') === \'drama\')', () =>{
        const bestTVShowsByGenre = {
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama: "The Wire"
        };
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    }); 
    it('returns undefined for findByValue(bestShowsByGenre, \'The \'70\') because value does not exist', () =>{
        const bestTVShowsByGenre = {
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama: "The Wire"
        };
        assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "The 70's Show"));
    });
    it("returns undefined when empty object is passed into findKeyByValue function", () =>{
        assert.isUndefined(findKeyByValue({},""));
    });

});