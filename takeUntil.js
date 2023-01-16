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
    return message;

}
const takeUntil = function(array, callback) {
    // ...
    let newArray =[];
    for (const element of array){
        if(callback(element)){
            break
        }
        newArray.push(element);
    }
    return newArray;

  }
/*TEST CASES
*1. CHECK IF FUNCTION WORKS: PROPERLY SLICES ARRAY
*2. RETURNS ORIGINAL ARRAY TO RETURN ORIGINAL ARRAY IF PIVOT ELEMENT 
*IF IT DOESNT EXIST IN ARRAY
*3. ORIGINAL ARRAY HASNT BEEN MUTATED
* RETURN EMPTY ARRAY IF ARRAY IS EMPTY
*/
//Happy Path Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertEqual(data1,data1));
console.log('---');
// Happy Path Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// IF PIVOT ELEMENT DOESNT EXIST
const data3 = [1,2,3,4,5];
const result3= takeUntil(data3, x => x > 5);
console.log(assertArraysEqual(data3,result3));
// IF ARRAY IS EMPTY
const result4= takeUntil([], x => {if (x) return x});
console.log(assertArraysEqual(result4,[]));



