import { Stack } from './stack.mjs';

const myStack = new Stack();

console.log(myStack.push('first'));
console.log(myStack.push('second'));
console.log(myStack.push('third'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());