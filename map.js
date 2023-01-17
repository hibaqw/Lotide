const words = ["ground", "control", "to", "major", "tom"];
/* code below produces error: reference error map is not defined
* also it takes a call back function instead of an array (words)*/

const map = function (array, callback) {
    // empty for now :)
    // temporary code:
    //console.log('array: ', array); //prints out array contents
    // console.log('callback: ', callback); //prints out function 
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;


}
const results1 = map(words, word => word[0]);

const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};

const eqArrays = function (arr1, arr2) {

    let equal = false;
    let output = "";
    //EDGE CASE
    //if array lengths are different return equal which is currently false
    if (arr1.length != arr2.length) {
        return equal;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (!assertEqual(arr1[i], arr2[i])) {
                return equal;
            }
        }
    }

    equal = true;
    return equal;
}
const assertArraysEqual = function (arr1, arr2) {
    const match = eqArrays(arr1, arr2);
    let message = ``;
    if (match) {
        message += ` ✅✅✅ Assertion passed: ${arr1} === ${arr2} `
    }
    else {
        message += `🛑🛑🛑 Assertion Failed: ${arr1} !===  ${arr2}`;

    }
    console.log(message);
    return message;

}
//TEST CASES: 
//CHECK IF ARRAY WORKS AS IT SHOULD
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
//CHECK IF MAP RETURNS EMPTY ARRAY WHEN INPUT ARRAY IS EMPTY
const results2 = map([], word => word[0]);
assertArraysEqual(results2, []);
module.exports = map;

