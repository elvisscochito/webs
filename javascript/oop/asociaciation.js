class User {
    constructor(fullName, email, username) {
        this.fullName = fullName;
        this.email = email;
        this.username = username;
    };
}

const user1 = new User("John Doe", "johndoe@email.com", "@johndoe");
const user2 = new User("Jane Catterson", "janecatterson@email.com", "@janecatterson");
console.log(user1);

/** @note relationship between objects by properties (but they are independent) */
user1.friend = user2;

console.log(user1);
