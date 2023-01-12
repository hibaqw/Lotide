const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};
const countLetters = function (str) {
    /*
    1. create an empty object
    2. TODO: check if any of the values
     that are true inside the object exist in the array
     3. if they are true iterate thru the array and increment key of related object
     3.return new object
    */

    const newObject = {};
    for (const letter of str.replace(/ /g, '')) {
        if (newObject[letter]) {
            newObject[letter] += 1;
        }
        else {
            newObject[letter] = 1;
        }

    }
    console.log(newObject);
    return newObject;
}
//TEST CASES
const result1 = countLetters('LHL');
console.log(assertEqual(result1["L"], 2));
console.log(assertEqual(result1["H"], 1));
const result2 = countLetters('LHl');
console.log(assertEqual(result2["L"], 1));
console.log(assertEqual(result2["l"], 1));
const result3 = countLetters('');
console.log(assertEqual(result3[''], undefined));




