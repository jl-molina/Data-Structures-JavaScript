import { Queue } from "./queue.mjs";

const myQueue = new Queue();

console.log(myQueue.enqueue('first'));
console.log(myQueue.enqueue('second'));
console.log(myQueue.enqueue('third'));
console.log(myQueue.enqueue('fourth'));
console.log(myQueue.peek());