class Queue {
  /**
   * Queue Constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds element in Queue
   * @param {any} element - Element wants to add
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * Removes first element from Queue
   * @returns any
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Returns first element of Queue, if queue is empty then it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  /**
   * Checks Queue is empty or not - returns true if queue is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the size of queue
   * @returns number
   */
  size() {
    return this.items.length;
  }

  /**
   * Prints the all element of queue as string
   */
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log("peek()", queue.peek());
console.log(queue.isEmpty());

queue.enqueue(10);
console.log(queue.isEmpty());
queue.enqueue(30);
queue.enqueue(20);

queue.print();
console.log(queue.dequeue());

console.log(queue.size());
queue.print();
