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


//TEST CASES:
// ODD ARRAY INPUT
assertArraysEqual(middle([1, 2, 3]), [2]);
// EVEN ARRAY INPUT
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// EMPTY ARRAY INPUT
assertArraysEqual(middle([]), []);
// ONE ELEMENT ARRAY INPUT
assertArraysEqual(middle([1]), []);
// TWO ELEMENT ARRAY INPUT
assertArraysEqual(middle([1, 2]), []);