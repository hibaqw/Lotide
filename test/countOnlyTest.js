const assert = require('chai').assert;
const countLetters = require('../countOnly');

describe("#countOnly", () => {
    it('returns true for countOnly(arr1, {\'javascript": true,\'recursion\': false,\'strings\':true) === {\'javascript\': 1, \'strings\'2}', () =>{
        const arr1 = ["javascript","loops", "strings", "strings"];
        assert.deepEqual(countLetters(arr1,{javascript: true, recursion:false, strings:true}), {javascript:1, strings:2});
    });
    it('returns true for countOnly(arr2, {\'javascript\':true, \'strings\': true}) === {}', () =>{
        const arr2 = ["loops","loops", "recursion"];
        assert.deepEqual(countLetters(arr2, {javascript: true, string:true}), {});
    });
    it('returns true for countOnly(arr3,{}) === {}', () =>{
        const arr3 = ["loops","loops", "recursion"];
        assert.deepEqual(countLetters(arr3, {}), {});
    });
    it('returns true for countOnly([], {\'javascript\':true, \'strings\': true}) === {}', () =>{
        const arr4 = [];
        assert.deepEqual(countLetters(arr4, {javascript: true, string:true}), {});
    });
});
