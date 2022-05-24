const capitalize = require("./capitalize");

test('Properly captalize a string', () => {
    expect(capitalize("abcde")).toBe("Abcde");
})

test('Properly captalize a string - all captalize', () => {
    expect(capitalize("aBCDE")).toBe("ABCDE");
})