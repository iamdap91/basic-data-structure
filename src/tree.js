class Node {
    data;
    right;
    left;

    constructor(data, right, left) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BinaryTree {
    root;

    constructor(arr) {
        if(typeof arr !== Object){
          return;  
        }else{
            this.makeBTbyArr(arr);
        }
    }

    makeBTbyArr(arr) {
        if ((arr[1] === undefined || arr[1] === null || typeof arr[1] === 'string'))
            return;

        arr.map((each, index) => {
            if (each === undefined || each === null || typeof each === 'string') {
                console.log('node missing in this index');
            } else {
                if (index === 1) this.root = each;
                const lcIndex = Math.floor(index * 2);
                const rcIndex = Math.floor(index * 2 + 1);
                each.left = (lcIndex >= arr.length) ? null : arr[lcIndex];
                each.right = (rcIndex >= arr.length) ? null : arr[rcIndex];
            }
        })
    }

    newNode = (data, right, left) => new Node(data, right, left);

    preOrder = (node) => {
        if (node === undefined || node === null) return 'node is not defined';
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    inOrder = (node) => {
        if (node === undefined || node === null) return 'node is not defined';
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

    postOrder = (node) => {
        if (node === undefined || node === null) return 'node is not defined';
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

}

function normalbinaryTree() {
    const binaryTree = new BinaryTree();

    const root = binaryTree.newNode('ROOT', null, null);
    const nodeA = binaryTree.newNode('A', null, null);
    const nodeB = binaryTree.newNode(
        'B',
        binaryTree.newNode('C', binaryTree.newNode('E'), binaryTree.newNode('F')),
        binaryTree.newNode('D', binaryTree.newNode('G'), binaryTree.newNode('H')));

    binaryTree.root = root;
    root.left = nodeA;
    root.right = nodeB;

    // 전위, 중위, 후위
    // binaryTree.preOrder(binaryTree.root);
    // binaryTree.inOrder(binaryTree.root);
    // binaryTree.postOrder(binaryTree.root);
}

function binarayTreeWithArray() {
    const nodeArray = [];
    for (let i = 0; i < 10; i++) {
        nodeArray.push(new Node(`Node ${i}`, null, null));
    }
    nodeArray[0] = 'emtpy';
    const binaryTree = new BinaryTree(nodeArray);

        // 전위, 중위, 후위
    // binaryTree.preOrder(binaryTree.root);
    // binaryTree.inOrder(binaryTree.root);
    // binaryTree.postOrder(binaryTree.root);
}


binarayTreeWithArray();
// normalbinaryTree();