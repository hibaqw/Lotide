const findKeyByValue = function (obj, value) {
    let keyList = Object.keys(obj);
    let keyFound = undefined;
    for (const key of keyList) {
        if (obj[key] === value) {
            keyFound = key;
        }
    }
    return keyFound;
}
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};
//TEST CASES:
module.exports = findKeyByValue;