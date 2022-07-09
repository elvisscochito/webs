/* https://www.youtube.com/watch?v=0GEUyQXe3NI&t=519s */

function add(number1, number2) {
    return number1 + number2;
}

function subs(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number1 == 0) {
        console.log("cannot divide by zero");
    } else {
        return number1 / number2;
    }
}

/** @note object and properties, it's an array itself */
export const maths = {
    add,
    subs,
    multiply,
    divide
}

console.log(maths);

/** @note object with a single function property */
export const greets = {
    Hello
};

console.log(x)
