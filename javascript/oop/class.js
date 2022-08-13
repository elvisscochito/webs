/* const person1 = new Person("Ian", "Wilson"); */ // Valid scope
/* console.log(person1.showFullName());

function Person(name, lastName) {
    "use strict";
    this.name = name;
    this.lastName = lastName;
    this.showFullName = function() {
        return `${this.name} ${this.lastName}`;
    };
} */

/** @note Syntactic sugar */

/* const user1 = new User("John", "Doe"); */ // Scope error

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;

        /** @note any object will have its own */
        /* return {
            anything: "anything",
        } */
    }

    /** @note such a prototype method but already included in class template */
    greet() {
        return `Hello I'm ${this.name} ${this.lastName}`;
    }
}

const user1 = new User("John", "Doe");
const user2 = new User("Will", "Smith");
console.log(user1, user2);

console.log(user1.greet(), user2.greet());

console.log(typeof User)
console.log(User.prototype)

