import { capitalize, reverseString } from "./main.js";

// Test capitalize
test("capitalize turns lowercase to uppercase", () => {
    expect(capitalize("frog")).toBe("Frog");
    expect(capitalize("cucumber")).toBe("Cucumber");
});

test("capitalize keeps uppercase words uppercase", () => {
    expect(capitalize("Watermelon")).toBe("Watermelon");
});

// Test reverseString
test("reverse a string", () => {
    expect(reverseString("love")).toBe("evol");
    expect(reverseString("fun")).toBe("nuf");
    expect(reverseString("madam")).toBe("madam");
    expect(reverseString("level")).toBe("level");
});
