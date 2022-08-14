class User {
    constructor(name = null, email, username) {
        this.name = name;
        this.email = email;
        this.username = username;
    }

    getName() {
        return this.name;
    }

    setName(name = null) {
        this.name = name;
    }
}

const user1 = new User("David");
console.log(user1.getName());
user1.setName("John");
console.log(user1.getName());
