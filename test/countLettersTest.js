const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
    it('returns true for countLetters(\'LHL\') === {L:2, H:2}', () =>{
        assert.deepEqual(countLetters('LHL'), {L:2,H:1});
    });
     it('returns true for countLetters(\'LHl\') === {L:1, H:2, l: 1}', () =>{
        assert.deepEqual(countLetters('LHl'), {L:1, H:1, l:1});
    });
    it('returns true for countLetters(\'\') === undefined', () =>{
        assert.isUndefined(countLetters(""));
    });

});

