const eqArrays = require('../eqArrays.js');

//TEST CASE 1: WORKS AS NORMAL- HAPPY PATH
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
// TEST CASE 2: RETURNS FALSE WHEN ARRAY ELEMENTS ARENT THE SAME
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false
// WHEN PASSED TWO EMPTY ARRAYS
console.log(eqArrays([], [])); // => TRUE
// WHEN PASSED ARRAYS OF UNEQUAL LENGTHS
console.log(eqArrays([1, 2], [1, 2, 3])); // => FALSE*/