const object = new Object();

/** @note literal object */
console.log(object);

/** @note it's the same and so much easier and cleaner */
const object2 = {};
console.log(object2.constructor);
console.log(object2.constructor === Object);

/** @note similar to new Number() but without the same properties */
const number = new Object(3 * 2);
console.log(number);

/** @note extend object with properties and methods */
const string = new Object("Hello World");
string.myProperty = "My own Property";
string.myMethod = function () {
    return `${this} My own Method`;
}
console.log(string);
console.log(string.myProperty);
console.log(string.myMethod());

const user = {
    name: "John",
    lastName: "Doe",
    age: 30,
    showFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

console.log(Object.keys(user));
console.log(Object.values(user));
