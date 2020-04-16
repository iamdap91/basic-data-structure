class Stack {
    stackArray;

    constructor() {
        this.stackArray = [];
    }

    setArray = (arr) => this.stackArray = arr;
    getArray = () => this.stackArray;

    size = () => this.stackArray.length;
    top = () => this.stackArray[this.stackArray.length - 1];
    pop = () => {
        this.stackArray = this.stackArray.slice(0, this.stackArray.length - 1);
        return this.stackArray[this.stackArray.length - 1];
    };
    push = (arg) => {
        const newArray = new Array(this.stackArray.length + 1);
        this.stackArray.map((each, index) => newArray[index] = each);
        newArray[newArray.length - 1] = arg;
        this.stackArray = newArray;
    };
}


const stack = new Stack();
// stack.setArray([10, 9, 8, 7, 6]);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

console.log(stack.getArray());
console.log(stack.top());
console.log(stack.size());

