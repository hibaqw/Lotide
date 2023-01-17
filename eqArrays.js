const assertEqual = require('./assertEqual');
const eqArrays = function (arr1, arr2) {
    let equal = false;
    //EDGE CASE
    //if array lengths are different return equal which is currently false
    if (arr1.length != arr2.length) {
        return equal;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (assertEqual(arr1[i], arr2[i]) === false) {
            return false;
        }
    }

    equal = true;
    return equal;
}
module.exports = eqArrays;
