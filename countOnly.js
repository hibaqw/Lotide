const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};
const countOnly = function (allItems, itemsToCount) {
    /*
    1. create an empty object
    2. TODO: check if any of the values
     that are true inside the object exist in the array
     3. if they are true iterate thru the array and increment key of related object
     3.return new object
    */

    const newObject = {};
    let keyList = [];
    for (const item in itemsToCount) {
        if (itemsToCount[item] === true) {
            keyList.push(item);
        }

    }
    for (let i = 0; i < allItems.length; i++) {
        if (keyList.includes(allItems[i]) && !newObject[allItems[i]]) {
            newObject[allItems[i]] = 1;

        }
        else if (keyList.includes(allItems[i]) && newObject[allItems[i]]) {
            newObject[allItems[i]]++;
        }
    }

    return newObject;
}


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
/*TESTING SPECFIC CASES: EMPTY ARRAY AND OBJECT
PASSING EMPTY OBJECT AND ARRAY
PASSING EMPTY ARRAY AND OBJECT*/
const result2 = countOnly([], {});
console.log(assertEqual(Object.keys(result2).length, 0));

const result3 = countOnly(firstNames, {});
console.log(assertEqual(Object.keys(result3).length, 0));
const result4 = countOnly([], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(assertEqual(Object.keys(result4).length, 0));