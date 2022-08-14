/** @note just use it and don't care about hot it works internality, code can be changed for improvement but output always need to be the same */

class Company {
    constructor(name = null) {
        this.name = name;

        /** @note variable is not a property */
        let employees = [];

        /** @note getter */
        this.getEmployees = function () {
            return employees;
        }

        /** @note setter */
        this.addEmployees = function (employee) {
            employees.push(employee);
        }
    }

    /* sortEmployees() {} */

    /** @note getter */
    get employees() {
        return this.name;
    }

    getEmployees() {
        return this.name;
    }

    /** @note setter */
    /* set employees(employees) {
        this.name = employees;
    } */

}

const company1 = new Company("Company 1", []);
console.log(company1.employees);
console.log(company1.getEmployees());

company1.addEmployees("Employee 1");
console.log(company1.getEmployees());
console.log(company1);


/** @note modify method (for better pratiques is created method to access properties instead of properties itself) */
/* company1.sortEmployees = "String"; */ // this is not allowed

/* company1.sortEmployees() */
