const each = require("jest-each").default;

const isAnagram = require("./isAnagram");



describe("isAnagram", () => {
    test("isAnagram is a function", () => {
    const result = isAnagram("Words", "Sword");
    expect(result).toEqual(true);
})}


)
