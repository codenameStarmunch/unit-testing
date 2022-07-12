const getLargest = require("./getLargest");

describe("getLargest", () => {

    test("getLargest is a function", () => {
        const result = getLargest(1, 12, 5);
        expect(result).toEqual(12);
    });
    
    test("getLargest is a function", () => {
        expect(typeof getLargest).toBe("function");
    });

})




