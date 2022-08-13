function showFullName() {
    return `${this.name} ${this.lastName}`;
}

/** @note avoid duplicate code */
const User1 = {
    name: "John",
    lastName: "Doe",
    age: 30,
    showFullName
}

/* const User2 = {
    name: "Jane",
    lastName: "Ilene",
    age: 30,
    showFullName
} */


/** @note constructor function (generate objects like a template) */

function User() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.showFullName = showFullName;
}

/** @note create a new object based on that template */
const User2 = new User();
User2.name = "Jane";
User2.lastName = "Ilene";
User2.age = 30;
console.log(User2);
console.log(User2.showFullName());

function UserParams(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.showFullName = showFullName;
}

const User3 = new UserParams("Will", "Smith", 28);
console.log(User3);

/** @note default constructor params values */

class Person {
    constructor(name = null, lastName = null) {
        this.name = name;
        this.lastName = lastName;
    }
    
    greets() {
        return `Hello I'm ${this.name} ${this.name}!`;
    }
}

const userParams = new Person('John', 'Doe');
const userWithoutParams = new Person();
console.log(userParams, userWithoutParams);
