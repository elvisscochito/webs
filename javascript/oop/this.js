const User = {
    name: "John",
    lastName: "Doe",
    age: 30,
    showFullName() {
        /* access entire object */
        console.log(this)

        /* access object properties */
        return `${this.name} ${this.lastName}`;
    }
}

/* console.log(User); */
console.log(User.showFullName());
