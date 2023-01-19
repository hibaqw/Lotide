const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
    it("returns true for shirtObject === anothershirtObject", () =>{
        const shirtObject = { color: "red", size: "medium" };
        const anotherShirtObject= { size: "medium", color: "red" };
        console.log(eqObjects(shirtObject,anotherShirtObject))
        assert.isTrue(eqObjects(shirtObject,anotherShirtObject));
    });
     it("returns false for shirtObject === longSleeveShirtObject", () =>{
        const shirtObject = { color: "red", size: "medium" };
        const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
        assert.isFalse(eqObjects(shirtObject,longSleeveShirtObject));
    });
    it("returns true for multiColorShirtObject === anotherMultiColorShirtObject", () =>{
        const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
        const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
        assert.isTrue(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));
    });
    it("returns false for longSleeveMultiColorShirtObject === multiColorShirtObject", () =>{
        const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
        const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
        assert.isFalse(eqObjects(longSleeveMultiColorShirtObject , multiColorShirtObject));

    });
    it("returns false for {} === multiColorShirtObject", () =>{
        const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
        assert.isFalse(eqObjects({}, multiColorShirtObject));

    });
    it("returns true for {} === {}", () =>{
        assert.isTrue(eqObjects({}, {}));

    });

});



