import { Node } from './node.mjs';

export class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null 
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;

        this.tail = newNode;

        this.length += 1;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;

        this.head = newNode;
        this.length += 1;

        return this;
    }

    insert(value, index) {
        
        if (index >= this.length) {
            console.log('There are not enough elements, value will be appended');
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getIndex(index - 1);
        const secondPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = secondPointer;
        this.length += 1;

        return this;
    }

    remove(index) {
        const firstPointer = this.getIndex(index - 1);
        const secondPointer = this.getIndex(index + 1);

        firstPointer.next = secondPointer;
        this.length -= 1;

        return this;
    }

    getIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while(count < index) {
            currentNode = currentNode.next;
            count += 1;
        }

        return currentNode;
    }
}