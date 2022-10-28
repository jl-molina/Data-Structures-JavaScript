import { SinglyLinkedList } from './singly.mjs'

const myLinkedList = new SinglyLinkedList('first');

console.log(myLinkedList);
console.log(myLinkedList.append('second'));
// console.log(myLinkedList.append('third'));
// console.log(myLinkedList.append('fourth'));
console.log(myLinkedList.prepend('zero'));
console.log(myLinkedList.insert('inserted', 1));
console.log(myLinkedList.remove(1));