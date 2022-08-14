/** @note capacity to handle multiple data types at the same time uniformly of ans object (reduces complexity in our code, sometimes allows us to create more understand and compact code). Generally support PL is: overloading(methods can take params with different data types and different amount of params and in the call can switch between them), parametric polymorphism(manage generic types and still process it) and subtype polymorphism also know as inclusion polymorphism(type can be represented by a class and derived from it) */

/** @note because javascript is a dynamic language datatypes can be change tricky (instead of has two different functions with two different data types such as int and string) */

/* function countLength( *//* string */ /* x) {
  return x.length;
} */

/** @note in fact, for that, we can just keep one function that accepts both data types params (int and string) */
function countLength(/* int */ x) {
    return x.toString().length;
}

console.log(countLength("Polymorphism overloading"));
console.log(countLength(8));

/** @note different amount of params */

/** @note in other oop languages like C# */
/* function sum(num1, num2) {
    return sum(num1, num2, 0);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
} */

/** @note in javascript we just can initialize params just like this */
function sum(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}

console.log(`Sum is: ${sum(1, 2)}`);
console.log(`Sum is: ${sum(1, 2, 3)}`);
