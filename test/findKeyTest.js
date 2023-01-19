const assert = require('chai').assert;
const findKey= require('../findKey');

describe("#findKey", () => {
    it("returns true when value in object satisfies callback condition (x.stars === 2 )", () =>{
    const testObject ={
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
    };
        assert.strictEqual(findKey(testObject, x => x.stars === 2), "noma");
    });
    it("returns undefined when no value in object i.e [1,3,2,3,2,3] meets callback condition (x.stars >= 4)", () =>{
        const testObject ={
            "Blue Hill": { stars: 1 },
            "Akaleri":   { stars: 3 },
            "noma":      { stars: 2 },
            "elBulli":   { stars: 3 },
            "Ora":       { stars: 2 },
            "Akelarre":  { stars: 3 }
        };
        assert.isUndefined(findKey(testObject, x => x.stars >= 4));
    });
    it("returns undefined when empty object is passed into findKey function", () =>{
        assert.isUndefined(findKey({}, ()=> {x => x}));
    });

});

//TEST CASES:
// console.log(assertEqual(findKey(testObject, x => x.stars === 2 ),"noma" )); //Happy Path Test Case 1 => true
// console.log(assertEqual(findKey(testObject, x => x.stars >= 4),undefined ));//Happy Path Test Case 2 => true
// //INPUT EMPTY OBJECT
// console.log(assertEqual(findKey({}, () => {return "Hello World" }), undefined )); // => true
// module.exports = findKey;