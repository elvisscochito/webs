function User() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
}

const user = new User();
/* console.log(user.showFullName()); */

/** @note without new in browser (it assigns the properties and methods to the upper object which is window) */
const user2 = User();
console.log(user2); // undefined

/** @note in browser's console */
/* window
window.document.title = "Test"
window.document.body. innerHTML = "<h1>Test</h1>"
window.name // ""
window.lastName // ""
window.age // 0 */

/** @note avoid weird objects assignation problem */
function UserStrict() {
    "use strict";
    this.name = "";
    this.lastName = "";
    this.age = 0;
}

const userStrict1 = new UserStrict();
console.log(userStrict1);

/* const userStrict2 = UserStrict();
console.log(userStrict2); */ // error because it's undefined

const gamers = {
    UserStrictNested: function () {
        "use strict";
        this.name = "";
        this.lastName = "";
        this.age = 0;
    }
}

/** @note always use new to create new instances and avoid weird behavior  */
const UserStrictNested = new gamers.UserStrictNested();
console.log(UserStrictNested); // undefined
console.log(gamers); // undefined
