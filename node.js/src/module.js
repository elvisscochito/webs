/** @note source tutorial: https://www.youtube.com/watch?v=BhvLIzVL8_o&list=WL&index=27 */

/** @note own modules */
import {add, subs, multiply, divide} from './modules/maths.mjs';

/** @note Node.js  built-in modules */
import os from 'os';

console.log(add(1, 2));
console.log(subs(1, 2));
console.log(multiply(1, 2));
console.log(divide(0, 1));
console.log(divide(1, 2));

console.log(os.cpus());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log("freemen:", os.freemem(), "bytes");
console.log("totalmen:",os.totalmem(), "bytes");
