
//const assertArraysEqual = require('../assertArraysEqual');
//TEST CASES:
// ODD ARRAY INPUT
//console.log(assertArraysEqual(middle([1, 2, 3]), [2])); //true
// EVEN ARRAY INPUT
//console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); //true
// EMPTY ARRAY INPUT
//console.log(assertArraysEqual(middle([]), []));// true
// ONE ELEMENT ARRAY INPUT
//console.log(assertArraysEqual(middle([1]), []));// true
// TWO ELEMENT ARRAY INPUT
//console.log(assertArraysEqual(middle([1, 2]), []));// true


const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns [2] for [1,2,3]", () =>{
        assert.deepEqual(middle([1,2,3]), [2]);
    });
    it("returns [2,3] for [1,2,3,4]", () =>{
        assert.deepEqual(middle([1,2,3,4]), [2,3]);
    });
    it("returns [] for []", () =>{
        assert.deepEqual(middle([]), []);
    });
    it("returns [] for [1]", () =>{
        assert.deepEqual(middle([1]), []);
    });
    it("returns [] for [1,2]", () =>{
        assert.deepEqual(middle([1,2]), []);
    });

});
