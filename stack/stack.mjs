import { Node } from './node.mjs';

export class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const pointer = this.top;
            pointer.next = newNode;
            this.top = newNode;
        }

        this.length += 1;

        return this;
    }

}