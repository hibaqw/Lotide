const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false;

};

const findKey = function (obj, callBack) {
    let keyList = Object.keys(obj);
    let keyFound = undefined;
    for (const key of keyList) {
        if (callBack(obj[key])) {
            keyFound = key;
            return keyFound;
        }
    }
    return keyFound;
}
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};
const testObject ={
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
//TEST CASES:
console.log(assertEqual(findKey(testObject, x => x.stars === 2 ),"noma" )); //Happy Path Test Case 1 => true
console.log(assertEqual(findKey(testObject, x => x.stars >= 4),undefined ));//Happy Path Test Case 2 => true
//INPUT EMPTY OBJECT
console.log(assertEqual(findKey({}, () => {return "Hello World" }), undefined )); // => true
module.exports = findKey;
