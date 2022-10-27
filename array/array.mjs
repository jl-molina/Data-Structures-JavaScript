export class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.data;  
    }

    pop() {
        const lastElement = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length -= 1;
        return lastElement;
    }

    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length -= 1;
    }

    shift() {
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length -= 1;
        return this.data;
    }
    
    unshift(item) {
        for (let i = 0; i <= this.length - 1; i++) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length += 1;
        return this.data;
    }
}
