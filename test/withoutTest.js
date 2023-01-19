const assert = require('chai').assert;
const without = require('../without');
describe("#without", () => {
    it('returns true for without(["lighthouse", "hello"],["hello", "world", "lighthouse", "lighthouse"]) === ["world"]', () =>{
        const words = ["hello", "world", "lighthouse", "lighthouse"];
        const result1= without(words,["lighthouse", "hello"]);
        assert.deepEqual(result1, ["world"]);
    });
    it('returns true for without([],["hello", "world", "lighthouse", "lighthouse"]) === ["hello", "world", "lighthouse", "lighthouse"]', () =>{
        const words = ["hello", "world", "lighthouse", "lighthouse"];
        const result1= without(words,[]);
        assert.deepEqual(result1, words);
    });
    it('returns true for without(["orange"],["apple", "orange", "kiwi", "dragon fruit"]) === ["apple", "kiwi", "dragon fruit"]', () =>{
        const test2 = ["apple", "orange", "kiwi", "dragon fruit"];
        const wordList2 = without(test2, ["orange"]);
        assert.deepEqual(wordList2,["apple", "kiwi", "dragon fruit"]) ; 
    });
});


