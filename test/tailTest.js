
const functionObj= require('../tail');
const assertEqual = functionObj.assertEqual;
const tail = functionObj.tail;

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

// Test Case 2: ...
/* Ensure tail returns single element in 
the case of having only a single element array*/
result2 = tail(["LHL"]);
console.log(assertEqual(result2.length, 0));

// Test Case 3: ...
/* Returns an empty array if given an empty array as input */
result3 = tail([]);
console.log(assertEqual(result3.length, 0));