const letterPositions = function (sentence) {
    const results = {};
    const modifiedString = sentence.replace(/ /g, '');
    let pos = 0;
    for (const letter of modifiedString) {
        if (!results[letter]) {
            results[letter] = [];
            results[letter].push(pos);
            pos += 1;


        }
        else {
            results[letter].push(pos);
            pos += 1;
        }



    }
    console.log(results);
    return results;
};

// const result = letterPositions("lighthouse in the house");
// assertArraysEqual(letterPositions("hello").e, [1])
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
module.exports = letterPositions;
