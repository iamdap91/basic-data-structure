class Node {
    data;
    previous;
    next;

    constructor(data, previous, next) {
        this.next = next;
        this.data = data;
        this.previous = previous;
    }
}

class LinkedList {

    first;
    last;
    size;

    constructor(firstNodeData) {
        this.first = new Node(firstNodeData);
        this.last = this.first;
        this.size = 1;
    }

    insertLast = (data) => {
        const newNode = new Node(data, this.last);
        this.last.next = newNode;
        this.last = newNode;
    }

    getSize = () => this.size;

    isEmpty = () => {
        const status = (this.size === 0) ? true : false;
        return status;
    };

    printInOrder = (node) => {
        if (node === undefined || node === null) {
            return;
        }
        process.stdout.write(node.data + ', ');
        this.printInOrder(node.next);
    };

    printReverseOrder = (node) => {
        if (node === undefined || node === null) {
            return;
        }
        process.stdout.write(node.data + ', ');
        this.printReverseOrder(node.previous);
    };

    searchNode = (data, order) => {
        const startNode = (order === 'asc') ? this.first : this.last;
        return this.roundNode(startNode, data, order);
    };

    roundNode = (node, data, order) => {
        if (node === null | node === undefined) return null;
        if (node.data === data) return node;
        const foundNode = (order === 'asc') ? this.roundNode(node.next, data, order) : this.roundNode(node.previous, data, order);
        return foundNode;
    };

    insertNode = (data, nodeToFind) => {
        const foundNode = this.searchNode(nodeToFind);
        const newNode = new Node(data, foundNode, foundNode.next);
        foundNode.next.previous = newNode;
        foundNode.next = newNode;

        if (foundNode.next === null | foundNode.next === undefined){
            this.last = newNode
        }
        this.size++;
    };

    deleteNode = (data, searchOrder) => {
        const foundNode = this.searchNode(data, searchOrder);
        foundNode.previous.next = foundNode.next;
        foundNode.next.previous = foundNode.previous;
        this.size--;
    };
}

const linkedList = new LinkedList('firstNode');
for (let i = 0; i < 10; i++) {
    linkedList.insertLast(`Node ${i}`);
}

//////// print 
// linkedList.printInOrder(linkedList.first);
// linkedList.printReverseOrder(linkedList.last);

//////// find node inorder
// const foundNode = linkedList.searchNode('Node 3', 'asc');
// const foundNode = linkedList.searchNode('Node 5', 'desc');
// console.log(foundNode);

//////// find and insert node
// linkedList.insertNode('added Node', 'Node 5');
// linkedList.insertNode('added Node2', 'Node 7');

//////// delete node
// linkedList.deleteNode('added Node2', 'asc');

//////// print result
// console.log();
// linkedList.printInOrder(linkedList.first);
// linkedList.printReverseOrder(linkedList.last);
// console.log();