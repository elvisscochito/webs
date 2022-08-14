/** @note created more sub specific object from original one (share params, methods and properties between both objects to avoid duplicate code) */

function funcPerson() {
    this.name = null;
    this.lastName = null;
}

function funcProgrammer() {
    this.language = null;
}

funcProgrammer.prototype = new funcPerson();

console.log(funcProgrammer);
console.log(funcPerson);

const funcPerson1 = new funcPerson();
funcPerson1.name = "John";
funcPerson1.lastName = "Doe";
console.log(funcPerson1);

const funcProgrammer1 = new funcProgrammer();
funcProgrammer1.name = "Will";
funcProgrammer1.lastName = "Smith";
funcProgrammer1.language = "JavaScript";

/** @note type funcPerson because it decent from it */
console.log(funcProgrammer1);

class Person {
    constructor(name = null, lastName = null) {
        this.name = name;
        this.lastName = lastName;
    }
}

/** @note avoid this */
/* class Programmer {
    constructor(name = null, lastName = null) {
        this.name = name;
        this.lastName = lastName;
    }
} */

/** @note do this */

class Programmer extends Person {
    constructor(name = null, lastName = null, language = null) {

        /** @note extra js method that calls parent constructor */
        super(name, lastName);
        this.language = language;
    }
}

const Person1 = new Person("John", "Doe");
const Programmer1 = new Programmer("David", "Davidson", "JavaScript");

console.log(Person1, Programmer1);
