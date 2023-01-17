const assertEqual = require('./assertEqual');
const head = function (arr1) {
    let arrLength = arr1.length;
    let head = undefined;
    if (arrLength > 0) {
        head = arr1[0];
    }
    return head;
}
module.exports = { assertEqual: assertEqual, head: head};
