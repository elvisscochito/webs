/** @note allow objects with different datatypes but with an inheritance relationship */

class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

class Programmer extends Person {
    constructor(name, lastName, language) {
        super(name, lastName);
        this.language = language;
    }
}

function getFullName(/* datatype (such as Person or Programmer object but remember inheritance converts Programmer into a Person object instance) and but not here in js because it's dynamic as well */ p) {
    return `${p.name} ${p.lastName}`;
}

const person = new Person('John', 'Doe');
const programmer = new Programmer('Ryan', 'Ray', 'JavaScript');
console.log(person, programmer);

console.log(getFullName(person));
console.log(getFullName(programmer));
