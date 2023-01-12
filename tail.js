const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};

const tail = function (arr1) {
    let arrLength = arr1.length;
    let tail = [];
    if (arrLength >= 1) {
        for (let i = 1; i < arrLength; i++) {
            tail.push((arr1[i]));
        }
    }
    console.log(tail);
    return tail;
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
// ...
result2 = tail(["LHL"]);
console.log(assertEqual(result2.length, 0));

// Test Case 3: ...
// ...
result3 = tail([]);
console.log(assertEqual(result3.length, 0));