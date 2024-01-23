class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enQueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }

  deQueue() {
    if (this.length === 0) return null;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.length--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
queue.deQueue();
console.log(queue);

//FYI:  push with shift
// 1->2->3->4->5
//after dequeue
// 2->3->4->5

// ---------- Complexity--------
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

//----Usage----
// 1. Processing tasks
// 2. Uploading / downloading
