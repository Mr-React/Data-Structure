class OP_Queue{

    /**
     * Queue Constructor
     */
    constructor(){
        this.items = {};
        this.rear = 0; 
        this.front = 0;
    }

    /**
     * Adds element in Queue
     * @param {any} element - Element wants to add
     */
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    /**
     * Removes first element from Queue
     * @returns any
     */
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    /**
     * Returns first element of Queue, if queue is empty then it returns null
     * @returns any
     */
    peek(){
        if(!this.isEmpty){
            return this.items[this.front];
        }

        return null;
    }

    /**
     * Checks Queue is empty or not - returns true if queue is empty otherwise false
     * @returns boolean
     */
    isEmpty(){
        return this.rear - this.front === 0;
    }

    /**
     * Returns the size of queue
     * @returns number
     */
    size(){
        return this.rear - this.front;
    }

    /**
     * Prints the all element of queue as string
     */
    print(){
        console.log(this.items);
    }

}

const queue =  new OP_Queue();
console.log("peek()",queue.peek());
console.log(queue.isEmpty());

queue.enqueue(10);
console.log(queue.isEmpty());
queue.enqueue(30);
queue.enqueue(20);

queue.print();
console.log(queue.dequeue());

console.log(queue.size());
queue.print();