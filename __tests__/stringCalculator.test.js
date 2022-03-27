const { expect } = require("@jest/globals");
const add = require("../stringCalculator");

test('Should return number of 0 for empty String', () => {
    expect(add("")).toBe(0);
    expect(add("5")).toBe(5);
    expect(add("1,2,3,4,5")).toBe(15);
});