
/*const tail= require('../tail');
const assertEqual = require('../assertEqual');*/
/*Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

 Test Case 2: ...
 Ensure tail returns single element in 
the case of having only a single element array
result2 = tail(["LHL"]);
console.log(assertEqual(result2.length, 0));

 Test Case 3: 
Returns an empty array if given an empty array as input 
result3 = tail([]);
console.log(assertEqual(result3.length, 0));*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns true for tail([\"hello\", \"lighthouse\",\"Labs\"]).length === 2", () =>{
        const result1= tail(["hello", "Lighthouse", "Labs"]);
        assert.strictEqual(result1.length,2);

    });
    it("returns true for tail([\"hello\", \"Lighthouse\", \"Labs\"]) === [\"Lighthouse\", \"Labs\"]", () =>{
        const result1= tail(["hello", "Lighthouse", "Labs"]);
        assert.deepEqual(result1,["Lighthouse", "Labs"]);

    });
    it("returns true for [\"LHL\"] passed to tail to return array with length of one element", () =>{
        const result2 = tail(["LHL"]);
        assert.strictEqual(result2.length,1);
        
    });
    it("returns true for tail to be passed [\"LHL\"] and return [\"LHL\"]", () =>{
        assert.deepEqual(tail(["LHL"]),["LHL"]);
    });
    it("returns true for the length of an empty array === 0 ", () =>{
        const result3 = tail([])
        assert.strictEqual(result3.length,0);
    });
    it("returns true for tail to return an empty array when passed an empty array as input", () =>{
        const result3 = tail([]);
        assert.deepEqual(result3,[]);
    });
});