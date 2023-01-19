const takeUntil = function(array, callback) {
    // ...
    let newArray =[];
    for (const element of array){
        if(callback(element)){
            break
        }
        newArray.push(element);
    }
    return newArray;

  }
module.exports = takeUntil;



