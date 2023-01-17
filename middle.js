//const assertArraysEqual = require('./assertArraysEqual');
const middle = function (arr1) {
    /*TODO:
    1. Initialize new array
    2. Get length of array -> if array length: 0,1,2 return empty array
    3. find middle
    4. round middle down -> odd
    5. push middle elements in array (one if odd 2 if even)
    6. return array
    */

    let midArray = [];
    let arrLength = arr1.length;
    let mid = Math.floor(arrLength / 2);
    if (arrLength <= 2) {
        return midArray;

    }

    else {
        if (arrLength % 2 === 0) {
            midArray.push(arr1[mid] - 1);
            midArray.push(arr1[mid]);
        }
        else {
            midArray.push(arr1[mid]);

        }

    }

    return midArray;

}
module.exports = middle;
