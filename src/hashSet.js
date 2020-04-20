const hash = (string, storageSize) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash % storageSize;
};


class HashSet {
    storage;
    size;
    constructor(size) {
        this.storage = [];
        this.size = size;
    }

    add(value) {
        const index = hash(value, this.size);
        if (!this.storage[index]) {
            this.storage[index] = [value];
        } else {
            const res = this.storage[index].find(each => each === value);
            res ? null : this.storage[index].push(value);
        }
    }

}


const hSet = new HashSet(23);
for (let i = 0; i < 17; i++){
    hSet.add(`Node ${Math.round(Math.random() * 10)}`);
}

console.log(hSet.storage);