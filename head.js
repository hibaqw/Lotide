const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};

const head = function (arr1) {
    let arrLength = arr1.arrLength;
    let head = undefined;
    if (arrLength > 0) {
        head = arr1[0];
    }
    else {
        return head;
    }
}

//TEST CASES
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), undefined));