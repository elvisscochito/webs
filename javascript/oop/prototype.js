function showFullName() {
    return `${this.name} ${this.lastName}`;
}

function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.showFullName = showFullName;
}

const user1 = new User("John", "Doe", 30);
const user2 = new User("Jane", "Smith", 25);

user1.greets = function () {
    return `Hello I'm ${this.name}`;
};

console.log(user1, user2);

console.log(user1.showFullName(), user2.showFullName());
console.log(user1.greets());

const user3 = new User("Mike", "Anderson", 28);
const user4 = new User("Ian", "Turkish", 23);

/** @note extends object method without extend the User constructor itself (by reference) */
User.prototype.greets = function () {
    return `Hello I'm ${this.name}`;
}

User.prototype.active = true;

console.log(user3, user4);
console.log(user3.greets(), user4.greets());
console.log(user3.active, user4.active);

const myString = new String("Hello World");
String.prototype.concat = function (concatString) {
    return `${this} ${concatString}`;
}

console.log(myString.concat("Test"));

console.log("chris steven".toUpperCase());
console.log("Chris Steven".concat("Test"));
