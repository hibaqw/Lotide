const functionObj = require('../head');

const assertEqual = functionObj.assertEqual;
const head = functionObj.head;
//TEST CASES
console.log(assertEqual(head([5, 6, 7]), 5));// true
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));//true
console.log(assertEqual(head([]), undefined));