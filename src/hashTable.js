const hash = (string, storageSize) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash % storageSize;
};

class Node {
    key;
    value;
    chain;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    setChain = (chain) => this.chain = chain;
}

class HashTable {
    size;
    storage;

    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }

    add = (key, value) => {
        const node = new Node(key, value);
        const index = hash(key, this.size);

        if (!this.storage[index]) {
            this.storage[index] = node;
        } else {
            this.collision(node, index);
        }
        return;
    }

    collision = (node, index) => {
        if (!node.chain) {      // chain 값 없음
            this.storage[index].chain = node;
        } else {                // chain 값이 있을때
            this.collision(node.chain, index);
        }
    }

    lookUp = (key) => {
        const index = hash(key, this.size);
        const foundNode = this.storage[index];
        if (foundNode.key === key) {
            return foundNode;
        } else {
            return this.lookUpChain(foundNode.chain, key);
        }
    }

    lookUpChain(node, key) {
        if (node.key === key) {
            return node;
        } else {
            return this.lookUpChain(node.chain, key);
        }
    }

    countAll = () => {
        let cnt = 0;
        this.storage.map(each => cnt += this.countChains(each))
        return cnt;
    }

    countChains = (node) => {
        let eachCnt = 0;
        if (!node) {
            return 0;
        } else {
            eachCnt++;
            eachCnt += this.countChains(node.chain);
        }
        return eachCnt;
    }

}


const hTable = new HashTable(23);
for (let i = 0; i < 17; i++) {
    hTable.add(`Node ${i}`, Math.random() * 10);
}

console.log(hTable.storage);
console.log(hTable.countAll());

