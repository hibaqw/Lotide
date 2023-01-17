// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    let valid = false;
    if (actual === expected){
       // console.log(` ✅✅✅ Assertion passed: ${actual} === ${expected} `);
        valid = true;
        return valid;
    }
    //console.log(`🛑🛑🛑 Assertion Failed: ${actual} !===  ${expected}`);
    return valid;


};
module.exports = assertEqual;
