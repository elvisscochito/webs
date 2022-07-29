/** @note source: https://www.youtube.com/watch?v=Ah7-PPjQ5Ls&list=WL&index=71 */

/** @note  multiplicate each number by two */
[1, 2, 3].map(item => item * 2);

/** @note  add c to each item */
console.log(['', 'a', 'b'].map(item => item + 'c'));

/** @note  filter non-meat food*/
console.log(['🥩', '🥦', '🌽'].filter(item => item !== '🥩'));

/** @note find the sparks */
console.log(['⚡️', '🚀', '✨'].find(item => item === '✨'));

/** @note return the position */
console.log(['⚡️' /* 0 */, '🚀'/* 1 */, '✨'/* 2 */].findIndex(item => item === '✨'));

/** @note fill the array (each item) with money */
console.log(['', '', ''].fill('💸'));

/** @note everything is fine? */
console.log(['✅', '✅', '❌'].every(item => item === '✅'));

/** @note something is wrong? */
console.log(['✅', '✅', '❌'].some(item => item === '❌'));
