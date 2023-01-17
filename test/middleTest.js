const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


//TEST CASES:
// ODD ARRAY INPUT
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); //true
// EVEN ARRAY INPUT
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); //true
// EMPTY ARRAY INPUT
console.log(assertArraysEqual(middle([]), []));// true
// ONE ELEMENT ARRAY INPUT
console.log(assertArraysEqual(middle([1]), []));// true
// TWO ELEMENT ARRAY INPUT
console.log(assertArraysEqual(middle([1, 2]), []));// true