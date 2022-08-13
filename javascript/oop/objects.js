/** @note primitive datatypes */
console.log(typeof "Hello World");
console.log(typeof 8);
console.log(typeof true);


/** @note with objects */
console.log(/* typeof */ new String("Hello World"));
console.log(/* typeof */ new Number(8));
console.log(/* typeof */ new Boolean(true));

/** @note almost everything it's and object in js (because methods like Object.toUpperCase()) */
console.log(typeof {});
console.log(typeof []);
console.log(typeof Date());
console.log(typeof new Date());
console.log(typeof new RegExp());

console.log(typeof function(){});
