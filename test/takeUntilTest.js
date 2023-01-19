const assert = require('chai').assert;
const takeUntil = require('../takeUntil');
describe("#takeUntil", () => {
    it('returns true for data1 array === data1.length', () =>{
        const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
        takeUntil(data1, x => x < 0);
        assert.strictEqual(data1.length, 9);
    });
    it('returns true for data1 array === data1', () =>{
        const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
        takeUntil(data1, x => x < 0);
        assert.strictEqual(data1, data1);
    });
    it('returns true for data1 array === data1.length', () =>{
        const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
        const result2 = takeUntil(data2, x => x === ',');
        assert.deepEqual(result2,["I've", "been", "to", "Hollywood"]);
    });
    it('returns true for takeUntil(data3, x=> x>5) === data3 (when pivot element does not exist.', () =>{
        const data3 = [1,2,3,4,5];
        const result3= takeUntil(data3, x => x > 5);
        assert.deepEqual(data3,result3);
    });
    it('returns true for takeUntil([], x=> x) === []', () =>{
        const result4= takeUntil([], x => x);
        assert.deepEqual(result4,[]);
    });
   
    
    
    


});
