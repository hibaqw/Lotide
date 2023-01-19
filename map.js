const words = ["ground", "control", "to", "major", "tom"];
/* code below produces error: reference error map is not defined
* also it takes a call back function instead of an array (words)*/

const map = function (array, callback) {
    // empty for now :)
    // temporary code:
    //console.log('array: ', array); //prints out array contents
    // console.log('callback: ', callback); //prints out function 
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;


}
const results1 = map(words, word => word[0]);

const assertEqual = function (actual, expected) {
    if (actual === expected)
        return true;

    else
        return false

};
module.exports = map;


