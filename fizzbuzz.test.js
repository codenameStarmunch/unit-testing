
const each = require("jest-each").default;

const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
   
    describe("fizzbuzz tests", () => {
        test("Given an integer -num- it returns an array from 1 to the integer -num-", () => {
            let num = 2;
            let expected = [1, 2];
            let actual = fizzbuzz(num);
            expect(actual).toEqual(expected);
        }); 
    });

    test("If num is divisible by 3, print 'Fizz!'", () => {
        let num = 3;
        let expected = [1, 2, "Fizz!"];
        let actual = fizzbuzz(num);
        expect(actual).toEqual(expected);
    });

    test("If num is divisible by 5, print 'Buzz!'", () => {
        let num = 5;
        let expected = [1, 2, "Fizz!", 4, "Buzz!"];
        let actual = fizzbuzz(num);
        expect(actual).toStrictEqual(expected);
    });  

    test("If num divisible by 3 and 5, print 'Fizzbuzz'", () => {
        let num = 15;
        let expected = [1, 2, "Fizz!", 4, "Buzz!", "Fizz!", 7, 8, "Fizz!", "Buzz!", 11, "Fizz!", 13, 14, "Fizzbuzz!", "Fizz!"];
        let actual = fizzbuzz(num);
        expect(actual).toStrictEqual(expected);
    });
    
    test("To have number", () => {
        let num = 15;
        let actual = fizzbuzz(num);
        expect(actual).toHaveLength(16);
    });
})
