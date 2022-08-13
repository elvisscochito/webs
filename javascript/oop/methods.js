/** @note objects can do actions(in opp) or functions (in code) */

function showFullName() {
    return `${this.name} ${this.lastName}`;
}

const User = {
    name: "John",
    lastName: "Doe",
    age: 30,
    /* showFullName: showFullName */
    /* showFullName: function () {
        return `${this.name} ${this.lastName}`;
    } */
    /* showFullName() {
        return `${this.name} ${this.lastName}`;
    } */
    showFullName
}

/** @note call methods */
console.log(User.showFullName());

const Car = {
    model: "Shellby Cobra",
    turnOn: function() {
        console.log("Car is on")
    },
    turnOff: function() {
        console.log("Car is off")
    }
}

Car.turnOn()

const Card = {
    number: "4000123456789010",
    balance: 1000,
    withdraw: function(amount) {
        this.balance -= amount
    },
    deposit: function(amount) {
        this.balance += amount
    }
}

Card.withdraw(200)
console.log(Card.balance)
Card.deposit(500)
console.log(Card.balance)
