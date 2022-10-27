class HashTable {

    constructor(size) {
        this.data = new Array(size);
        console.log(this.data);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        } else {
            this.data[address].push([key, value]);
        }

        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (const element of currentBucket) {
                if (element[0] === key) {
                    return element[1];
                }
            }
        }

        return currentBucket;
    }

}

const hash = new HashTable(50);
console.log('set method', hash.set('Diego', 10));
console.log('set method', hash.set('Mariana', 20));
console.log('set method', hash.set('jose luis', 30));
console.log('get method', hash.get('Diego'));