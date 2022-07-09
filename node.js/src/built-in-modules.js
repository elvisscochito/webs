/** @note source tutorial: https://www.youtube.com/watch?v=BhvLIzVL8_o&list=WL&index=27 */

import fs from 'fs';

/** @note create and write into a new file */
const message = "Hello, world!";

/** @note asynchronic code, is an os taks not a node.js taks, node.js just delegated that and wait for it */
fs.writeFile('file.txt', message, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

/** @note This happens because node wait for the above code and continue to the next piece of code and this is the key why node can managed a lot of concurrent users */
console.log("This will be displayed in the console first")

/** @note block bellow code and wait for it to finish, isn't recommended because isn't asynchronic */
/* const result = fs.writeFile('file.txt', message); */

/** @note read the content inside the previous file */
const fileName = ('file.txt');

fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

/** @note for more info: https://catalins.tech/a-beginners-guide-to-the-file-system-module-in-nodejs */

/** @note blocking code */
/* const user = sql('SELECT * FROM user'); */

/* sql('SELECT * FROM user', (err, users) => {
    if (err) {
        throw err;
    } else if (users > 0) {
        console.log(users);
    }
}) */

