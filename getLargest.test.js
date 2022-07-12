const getLargest = require("./getLargest");
const each = require("jest-each").default;

describe("getLargest", () => {

    test("getLargest is a function", () => {
        const result = getLargest(1, 12, 5);
        expect(result).toEqual(12);
    });
    
    test("getLargest is a function", () => {
        expect(typeof getLargest).toBe("function");
    });
    
    describe("It handles normal inputs successfully", () => {
        
        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 36, 17], 36]
        ]).test("", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })
    })
})


