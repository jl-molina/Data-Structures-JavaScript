import { MyArray } from "./array.mjs";

const myArray = new MyArray();

console.log(myArray.push('first'));
console.log(myArray.push('second'));
// console.log(myArray.get(0));
// console.log(myArray.get(1));
console.log(myArray.pop());
console.log(myArray.pop());
console.log(myArray.push('third'));
console.log(myArray.push('fourth'));
console.log(myArray.push('fifth'));
console.log(myArray.delete(1));
console.log(myArray.push('sixth'));
console.log(myArray.shift());
console.log(myArray.unshift('first'));