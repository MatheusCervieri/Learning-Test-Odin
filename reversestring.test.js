const reverseString = require("./reversestring");
test('The String Reverse?' , () => {
    expect(reverseString("abcde")).toBe("edcba");
})