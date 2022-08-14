/** @note a type of association but objects have their own individual life cycle along with the ownership, some object has higher roles than other (the higher role are called aggregate and the lower role are called components) */

class company {
    constructor(name = null, Employees = null) {
        this.name = name;
        this.Employees = Employees;
    }
}

const company1 = new company("Company 1", []);

console.log(company1);

class Employee {
    constructor(fullName, email, username) {
        this.fullName = fullName;
        this.email = email;
        this.username = username;
    };
}

const employee1 = new Employee("John Doe", "johndoe@email.com", "@johndoe");
const employee2 = new Employee("Jane Catterson", "janecatterson@email.com", "@janecatterson");

console.log(employee1, employee2);

company1.Employees.push(employee1, employee2);

console.log(company1);
