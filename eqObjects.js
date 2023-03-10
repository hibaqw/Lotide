
const eqObjects = function(object1, object2) {

    const obj1Length = Object.keys(object1).length;
    const obj2Length = Object.keys(object2).length;
    let found = false;
    if (obj1Length != obj2Length){
        return found;
    }
    for (key in object1){

        if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
            if((Array.isArray(object1[key]) && !(Array.isArray(object2[key]))) ||(Array.isArray(object2[key]) && !Array.isArray(object1[key]))){
                return found;
            }
            found =eqArrays(object1[key],object2[key]);
        }
        else if(object2[key]=== undefined || assertEqual(object1[key], object2[key]) === false) {
            return found;
            
        }
    }
    found = true;
    return found;
    
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
module.exports = eqObjects;