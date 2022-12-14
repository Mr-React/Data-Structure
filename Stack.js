class Stack {
  /**
   * Stack Constructor
   * @constructor
   */
  constructor() {
    this.item = [];
  }

  /**
   *
   * @param {any} element - Adds element in stack
   */
  push(element) {
    this.item.push(element);
  }

  /**
   * Removes element from stack
   */
  pop() {
    return this.item.pop();
  }

  /**
   * Returns Top of the stack element if stack is empty it returns null
   * @returns number
   */
  peek() {
    if (!this.isEmpty()) {
      return this.item[this.item.length - 1];
    }
    return null;
  }

  /**
   * Checks Stack is empty or not - returns true if stack is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.item.length === 0;
  }

  /**
   * Returns the size of Stack
   * @returns number
   */
  size() {
    return this.item.length;
  }

  /**
   * Prints the all elements of stack as string
   */
  print() {
    console.log(this.item.toString());
  }
}

const stack = new Stack();
console.log("Peek() ", stack.peek());
console.log("Stack is Empty: ", stack.isEmpty());

stack.push(10);
console.log("Stack is Empty: ", stack.isEmpty());
stack.push(30);
stack.push(20);

console.log("Stack size: ", stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
