// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected)
        return ` ✅✅✅ Assertion passed: ${actual} === ${expected} `;

    else
        return `🛑🛑🛑 Assertion Failed: ${actual} !===  ${expected}`;

};
module.exports = assertEqual;
