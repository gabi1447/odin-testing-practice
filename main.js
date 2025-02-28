export function capitalize(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
export function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

export function calculator() {
    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    return {
        add,
        subtract,
        divide,
        multiply,
    };
}
