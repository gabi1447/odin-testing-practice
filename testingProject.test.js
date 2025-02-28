import { capitalize, reverseString, calculator } from "./main.js";

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

// Test calculator
const calc = calculator();
test("adding numbers", () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(5, 5)).toBe(10);
    expect(calc.add(-5, 6)).toBe(1);
    expect(calc.add(-5, -4)).toBe(-9);
});

test("subtracting numbers", () => {
    expect(calc.subtract(2, 2)).toBe(0);
    expect(calc.subtract(4, 2)).toBe(2);
    expect(calc.subtract(3, 5)).toBe(-2);
    expect(calc.subtract(100, 30)).toBe(70);
});

test("multiplying numbers", () => {
    expect(calc.multiply(2, 2)).toBe(4);
    expect(calc.multiply(4, 2)).toBe(8);
    expect(calc.multiply(-3, 5)).toBe(-15);
    expect(calc.multiply(-5, -6)).toBe(30);
});

test("dividing numbers", () => {
    expect(calc.divide(2, 2)).toBe(1);
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(1, 2)).toBe(0.5);
    expect(calc.divide(25, -5)).toBe(-5);
});
