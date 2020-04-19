const hash = (string, storageSize) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash % storageSize;
};

class HashTable {
    storage = [];
    storageLimit = 10;

    add = (key, value) => {
        const index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted == false) this.storage[index].push([key, value]);
        }
    }

    remove = (key) => {
        const index = hash(key, this.storageLimit);
        if (this.storage[index].lengh === 1 && this.storage[index][0][0] === key)
            delete this.storage[index];
        else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) delete this.storage[index][i];
            }
        }
    }

    lookup = (key) => {
        const index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) return undefined;
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) return this.storage[index][i][1];
            }
        }
    }

    print = () => console.log(this.storage);
}


console.log(hash('33sam', 10));

const ht = new HashTable();
ht.add('a', 'a');
ht.add('b', 'b');
ht.add('c', 'c');
ht.add('d', 'd');

ht.print();
