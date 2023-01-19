const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
describe("#assertArraysEqual", () => {
    it('returns true (successMessage) for assertArrayEqual([1,2,3,4], [1,2,3,4]) === [1,2,3,4]', () =>{
        const arr = [1,2,3,4]
        let message = `✅✅✅ Assertion passed: ${arr} === ${arr}`
        assert.strictEqual(assertArraysEqual([1,2,3,4],[1,2,3,4]), message);
    });
    it('returns is true (errorMessage) for assertArrayEqual([1,2,3],[1,2,3,4]) !=== [1,2,3,4] ', () =>{
        const arr = [1,2,3,4];
        const result1= assertArraysEqual([1,2,3],arr);
        let message = `🛑🛑🛑 Assertion Failed: 1,2,3 !===  ${arr}`;
        assert.strictEqual(result1, message);
    });
    it('returns true (successMessage) for assertArrayEqual([], []) === [])', () =>{
        const arr = [];
        const result2= assertArraysEqual([],[]);
        let message = `✅✅✅ Assertion passed: ${arr} === ${arr}`
        assert.strictEqual(result2, message);
    });

});








