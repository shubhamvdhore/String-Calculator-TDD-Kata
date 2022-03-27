const { expect } = require("@jest/globals");
const add = require("../stringCalculator");

test('Should return number of 0 for empty String', () => {
    expect(add("")).toBe(0);
    expect(add("5")).toBe(5);
    expect(add("1,2,3,4,5")).toBe(15);
});

test("Should not allow input ending with new line", () =>{
    try{
        add("1,\n");
        add("1,2,3\n");
        expect(true).toBe(false);
    }catch(err){
        expect(err.message).toBe("INVALID INPUT");
    }
});

test('Should allow new lines between numbers', () =>{
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2,3,4,5\n6,7")).toBe(28);
});

test('Should Support different delimiters', ()=> {
    expect(add("//;\n1;2,3,4;5")).toBe(15);
})