const countLetters = function (str) {
    /*
    1. create an empty object
    2. TODO: check if any of the values
     that are true inside the object exist in the array
     3. if they are true iterate thru the array and increment key of related object
     3.return new object
    */
   let newObject = undefined;
   if(str){
        newObject = {};
        for (const letter of str.replace(/ /g, '')) {
            if (newObject[letter]) {
                newObject[letter] += 1;
            }
            else {
                newObject[letter] = 1;
            }

        }
        console.log(newObject);
    }
    return newObject;
}

module.exports = countLetters;


