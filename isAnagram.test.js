const each = require("jest-each").default;

const isAnagram = require("./isAnagram");



describe("isAnagram", () => {
    test("isAnagram is true", () => {
    const result = isAnagram("Words", "Sword");
    expect(result).toBeTruthy();
})},
    
    test("isAnagram is false", () => {
    const result = isAnagram("Words", "Blimp")
    expect(result).toBeFalsy(); 
})
    
)
