const assert = require('chai').assert;
const letterPositions= require('../letterPositions');
describe("#letterPosition", () => {
    it('returns true for letterPositions("hello").e === [1]', () =>{
        assert.deepEqual(letterPositions("hello").e, [1]);
    });
    it('returns true for letterPositions("hello").l === [2,3]', () =>{
        assert.deepEqual(letterPositions("hello").l, [2,3]);
    });
    it('returns undefined for letterPositions("hello").p', () =>{
        assert.isUndefined(letterPositions("hello")["p"]);
    }); 
    it('returns {} for letterPositions("")', () =>{
        assert.deepEqual(letterPositions(""), {});
    });

});

