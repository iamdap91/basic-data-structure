class Queue {
    queueArray;

    constructor() {
        this.queueArray = [];
    }

    enqueue = (arg) => {
        const newArray = new Array(this.queueArray.length + 1);
        this.queueArray.map((each, index) => newArray[index] = each);
        newArray[newArray.length - 1] = arg;
        this.queueArray = newArray;
        return this.queueArray;

        // return this.queueArray.push(arg);
    }

    dequeue = () => {
        const newArray = new Array(this.queueArray.length - 1);
        this.queueArray.map((each, index) => {
            (index !== 0) ? newArray[index - 1] = each: null
        });
        this.queueArray = newArray;

        // return this.queueArray.shift();
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);

queue.dequeue();
queue.dequeue();



// queue size
console.log(queue.queueArray);

