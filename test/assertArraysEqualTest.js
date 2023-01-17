const assertArraysEqual = require('../assertArraysEqual');

//TEST CASE 1: HAPPY PATH (RETURNS GREEN MESSAGE FOR EQUIVALENT ARRAYS)
console.log(assertArraysEqual([1,2,3,4], [1,2,3,4])); 
//TEST CASE 2: RETURNS RED MESSAGE FOR DIFFERENT ARRAYS
console.log(assertArraysEqual([1,2,3], [1,2,3,4]));
//TEST CASE 3: RETURNS GREEN MESSAGE FOR TWO EQUIVALENT EMPTY ARRAYS
console.log(assertArraysEqual([], []));
//TEST CASE 4: RETURNS GREEN MESSAGE FOR TWO DIFFERENT ( ONE EMPTY AND NON-EMPTY) ARRAYS
console.log(assertArraysEqual([], ['HELLO', 'LHL', 'BOOTCAMP']));

