const assertObjectsEqual = require('../assertObjectsEqual');


console.log(assertObjectsEqual({a:1,b:2, c:3}, {a:1,b:2, c:3})); // => true
console.log(assertObjectsEqual({a:1,b:2, c:3}, {a:1,b:2, c:[1,2,3]})); // => false
console.log(assertObjectsEqual({}, {a:1,b:2, c:3})); // => false
console.log(assertObjectsEqual({}, {})); // => true
console.log(assertObjectsEqual({},{a:'hello'})); // => true