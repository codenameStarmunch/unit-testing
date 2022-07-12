
const each = require("jest-each").default;

const { getLargest, getSmallest } = require("./numberFunctions");


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
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })
    })
})


describe("getSmallest", () => {

    test("getSmallest is a function", () => {
        const result = getSmallest(1, 2, 3);
        expect(result).toEqual(1);
    });
    
    test("getSmallest is a function", () => {
        expect(typeof getSmallest).toBe("function");
    });
    
    describe("It handles normal inputs successfully", () => {
        
        each([
            [[1, 2, 3], 3],
            [[9, 8, 7], 9],
            [[12, 36, 17], 36]
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected);
        })
    })
})


