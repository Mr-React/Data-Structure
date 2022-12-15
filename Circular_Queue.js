class CircularQueue {
  /**
   * Circular Queue Constructor
   */
  constructor(capacity) {
    this.items = new Array(10);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  /**
   * Returns the state of Queue (Queue is full or not)
   * @returns boolean
   */
  isFull() {
    return this.currentLength === this.capacity;
  }

  /**
   * Checks Queue is empty or not - returns true if queue is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.currentLength === 0;
  }

  /**
   * Adds element in Queue
   * @param {any} element - Element wants to add
   */
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }

  /**
   * Removes first element from Queue
   * @returns any
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  /**
   * Returns first element of Queue, if queue is empty then it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }

  /**
   * Returns the size of queue
   * @returns number
   */
  size() {
    return this.capacity;
  }

  /**
   * Prints the all element of queue as string
   */
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);

console.log("isEmpty", queue.isEmpty());
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());

console.log("dequeue", queue.dequeue());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("peek", queue.peek());
queue.enqueue(40);
queue.enqueue(50);
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());
queue.print();
queue.enqueue(60);

console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());

console.log("isEmpty", queue.isEmpty());
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());

queue.enqueue(60);
queue.print();
console.log("size", queue.size());
