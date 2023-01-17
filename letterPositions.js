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





const letterPositions = function (sentence) {
    const results = {};
    const modifiedString = sentence.replace(/ /g, '');
    let pos = 0;
    for (const letter of modifiedString) {
        if (!results[letter]) {
            results[letter] = [];
            results[letter].push(pos);
            pos += 1;


        }
        else {
            results[letter].push(pos);
            pos += 1;
        }



    }
    console.log(results);
    return results;
};

const result = letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1])
assertArraysEqual(letterPositions("hello").l, [2, 3]);
module.exports = letterPositions;
