import { Node } from './node.mjs';

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.last;
            this.last = newNode;
        }

        this.length += 1;

        return this;
    }

    peek() {
        return this.first;
    }
}