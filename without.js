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

const without = function (listToFilter, filter) {

    let newList = [];

    for (let i = 0; i < listToFilter; i++) {
        if (!filter.includes(listToFilter[i])) {
            newList.push(listToFilter[i]);
        }

    }

    return newList;

}
module.exports = without;
//CASE 1: CHECK IF OLD ARRAY WAS MODIFIED
//const words = ["hello", "world", "lighthouse"];
//console.log(without(["lighthouse"], words)); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//ssertArraysEqual(words, ["hello", "world", "lighthouse"]);

//CASE 2: CHECK IF BOTH ARRAYS ARE THE SAME
// IN THE CASE A WORD THAT DOES NOT EXIST IN ORIGINAL ARRAY WAS ENTERED
//const test1 = ["foo", "bar", "operanting system", "macOS", "Windows"];
//const wordList = without(["android"], test1);
//assertArraysEqual(test1, wordList);
//CASE 3: CHECK IF WITHOUT REMOVES ONE INSTANCE OF WORD FROM LIST
/*const test2 = ["apple", "orange", "kiwi", "dragon fruit"];
const wordList2 = without(["orange"], test2);
assertArraysEqual(test2, wordList2); //assertion should fail

//CASE 2: CHECK IF BOTH ARRAYS ARE THE SAME
// IN THE CASE A WORD THAT DOES NOT EXIST IN ORIGINAL ARRAY WAS ENTERED
const wordList3 = without(["foo", "bar"], test1);
assertArraysEqual(test1, wordList3);*/







