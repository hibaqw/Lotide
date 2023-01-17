const tail = function (arr1) {
    let arrLength = arr1.length;
    let tail = [];
    if( arrLength === 1){
        tail.push(arr1[0]);
    }

    else if (arrLength > 1) {
        for (let i = 1; i < arrLength; i++) {
            tail.push((arr1[i]));
        }
    }
    return tail;
}

module.exports= tail;