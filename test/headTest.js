/*const functionObj = require('../head');

const assertEqual = functionObj.assertEqual;
const head = functionObj.head;
//TEST CASES
console.log(assertEqual(head([5, 6, 7]), 5));// true
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));//true
console.log(assertEqual(head([]), undefined));//true*/

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
    it("returns 1 for [1,2,3]", () =>{
        assert.strictEqual(head([1,2,3]), 1);
    });
    it("returns 5 for [5,6,7]", () =>{
        assert.strictEqual(head([5,6,7]), 5);
    });
    it("returns undefined for []", () =>{
        assert.strictEqual(head([]), undefined);
    });

});
