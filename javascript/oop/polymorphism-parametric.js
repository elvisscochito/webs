/** @note method that works with params almost any type, also called generics */

class GenericType {
    constructor(value/* <T> */ = []) {
        this.array = value;
    }

    getValue() {
        return this.array;
    }

    setValue(item) {
        this.array.push(item);
    }
}

const stack1 = new GenericType(/* <int> */);
const stack2 = new GenericType(/* <string> */);

stack1.setValue(8);
stack2.setValue("Aa");

console.log(stack1, stack2);
console.log(stack1.array, stack2.array);
console.log(stack1.getValue(), stack2.getValue());

