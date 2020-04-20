class Node {

    data;

    constructor(data) {
        this.data = data;
        for (let i = 0; i < 26; i++) {
            const tmp = String.fromCharCode(97 + i);
            this[tmp] = undefined;
        }
    }
}

class Trie {
    root;
    constructor(root) {
        this.root = root;
    }

    add = (word) => {
        let currentNode = this.root;
        let previousWhileChar = '';
        for (let i = 0; i < word.length; i++) {
            let currentChar = word.charAt(i);
            previousWhileChar += currentChar;
            if (currentNode[currentChar] === undefined) {
                const newNode = new Node(previousWhileChar);
                currentNode[currentChar] = newNode;
                currentNode = newNode;
            } else {
                currentNode = currentNode[currentChar];
            }
        }
    };


    lookUp = (word) => {
        let currentNode = this.root;
        let cnt = 0;
        for (let i = 0; i < word.length; i++) {
            cnt ++;
            let currentChar = word.charAt(i);
            currentNode = currentNode[currentChar];

            if (currentNode.data === word) return {currentNode, cnt};
        }
        return 'no match';
    }

}


const trie = new Trie(new Node('Root'));
trie.add('concatenate');
trie.add('apple');
trie.add('disguise');
trie.add('apocalypse');

const foundNode = trie.lookUp('apocalypse');
console.log(foundNode);