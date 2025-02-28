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

export function caesarCipher(str, key) {
    let cipheredText = "";

    for (let i = 0; i < str.length; i++) {
        const asciiCode = str[i].charCodeAt();
        if (asciiCode >= 65 && asciiCode <= 90) {
            // rotate uppercase alpha char using key
            cipheredText += rotateUpper(asciiCode, key);
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            // rotate lowercase alpha char using key
            cipheredText += rotateLower(asciiCode, key);
        } else {
            cipheredText += str[i];
        }
    }

    return cipheredText;
}

function rotateUpper(charCode, key) {
    const rotation = charCode + key;

    if (rotation <= 90) {
        return String.fromCharCode(rotation);
    } else {
        const diff = (rotation - 90) % 25;
        return String.fromCharCode(65 + diff - 1);
    }
}

function rotateLower(charCode, key) {
    const rotation = charCode + key;

    if (rotation <= 122) {
        return String.fromCharCode(rotation);
    } else {
        const diff = (rotation - 122) % 25;
        return String.fromCharCode(97 + diff - 1);
    }
}

export function analyzeArray(array) {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length,
    };
}

function average(array) {
    const total = array.reduce((accumulator, num) => {
        return accumulator + num;
    });

    return total / array.length;
}

function min(array) {
    let minNum = Infinity;
    for (let num of array) {
        if (num < minNum) {
            minNum = num;
        }
    }

    return minNum;
}

function max(array) {
    let maxNum = -Infinity;
    for (let num of array) {
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum;
}
