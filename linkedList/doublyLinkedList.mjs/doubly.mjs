import { Node } from './node.mjs';

export class DoublyLinkedList {
    
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null 
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this;
    }

}