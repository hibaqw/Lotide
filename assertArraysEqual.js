const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arr1, arr2) {
    const match = eqArrays(arr1, arr2);
    let message = ``;
    if (match) {
        message += ` ✅✅✅ Assertion passed: ${arr1} === ${arr2} `
    }
    else {
        message += `🛑🛑🛑 Assertion Failed: ${arr1} !===  ${arr2}`;

    }
    return message;

}
module.exports = assertArraysEqual;





