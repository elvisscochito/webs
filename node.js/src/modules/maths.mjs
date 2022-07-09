export function add(number1, number2) {
    return number1 + number2;
};

export function subs(number1, number2) {
    return number1 - number2;
};

export function multiply(number1, number2) {
    return number1 * number2;
};

export function divide(number1, number2) {
    if (number1 == 0) {
        console.log("cannot divide by zero");
    } else {
        return number1 / number2;
    }
};
