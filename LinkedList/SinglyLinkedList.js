class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) { // When there is not node present in the list
      this.head = newNode;
      this.tail = this.head;
    } else { //When there is some node already present in the list
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; //update the length of list
    return this;
  }

  pop(){
    if(!this.head) return null;
    var current = this.head; //10
    let newTail = current; //10
    while(current.next) { //traverse list till tail - 1
        newTail = current; //10 //11 //12 //13
        current = current.next; //11 //12 //13 //14
    }
    this.tail = newTail; //updated the tail to tail - 1
    this.tail.next = null; // assign null to tail's next
    this.length--; //decrease length by 1
    if(this.length === 0) { // USE CASE: If list is empty assign null to head and tail
        this.head = null;
        this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return null;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
        this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let prevHead = this.head;
    if (!this.head) { // When there is not node present in the list
      this.head = newNode;
      this.tail = this.head;
    } else { //When there is some node already present in the list
        this.head = newNode;
        this.head.next = prevHead;
    }
    this.length++; //update the length of list
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
        current = current.next;
        counter++;
    }
    return current;
  }

  set(index, val) { // Replace only value
    let foundNode = this.get(index);
    if(foundNode) {
        foundNode.val = val;
        return true;
    }
    return false;
  }

  insert(index, val) { //insert new node based on index
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val); //If index is last it means it is push (to return boolean using !!)
    if(index === 0) return !!this.unshift(val); // If index is first it means it is unshift  (to return boolean using !!)
    let prev = this.get(index - 1); //storing index - 1 node in temp var
    let temp = prev.next; // storing index+1 next pointer in temp var
    let newNode = new Node(val); // creating new node with given value
    prev.next = newNode; // Pointing index - 1 (prev node) to new node
    newNode.next = temp; // Pointing new node to index+1 node
    this.length++; //Increase length of list
    return true;
  }

  remove(index) { //remove node from given index
    if(index < 0 || index > this.length) return false;
    if(index === this.length - 1) return !!this.pop(); //If index is last it means it is pop (to return boolean using !!)
    if(index === 0) return !!this.shift(); // If index is first it means it is shift  (to return boolean using !!)
    let prevNode = this.get(index - 1); //storing index - 1 node in temp var
    let removedNode = prevNode.next; // storing index pointer in temp var
    prevNode.next = removedNode.next; // Pointing index - 1 (prev node) to index +1 (next) node
    this.length--; //Decrease length of list
    return true;
  }

  reverse() { // Reverse Linked list
    //Swapping head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for(let i=0; i<this.length; i++) {
        next = node.next; //11
        node.next = prev; // null
        prev = node; //10
        node = next; //11
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(10); //1
list.push(11); //2
list.push(12); //3
list.push(13); //4
list.push(14); //5
// list.set(0,6);
// list.insert(0,100); //0
// list.remove(5);
console.log(list.print());
list.reverse();
console.log(list.print());
// console.log(list.get(6));
