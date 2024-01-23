class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack);

//FYI:  In the linked list adding to end and removing from end is expensive operation thats why we are doing this by shift and unshift
// 5->4->3->2->1
//after pop
// 4->3->2->1

// ---------- Complexity--------
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

//----Usage----
// 1. Undo/Redo
// 2. Routing in react/angular
