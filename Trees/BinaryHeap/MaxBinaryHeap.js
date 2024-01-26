class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  insert(element) {
    this.values.push(element);
    //bubble up (bottom to top)
    this.bubbleUp();
  }

  extractMax() {
    // Remove root(max) element
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //trickle down (top to bottom)
      this.trickleDown();
    }
    return max;
  }

  trickleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 1;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          swap !== null ** rightChild > leftChild
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
const heap = new MaxBinaryHeap();
heap.insert(55);

// Binary heaps are used to implement Priority Queues.
// used with graph travesal algorithms also.
// For finding parent: If parent at n then left child at 2n+1 and right at 2n+2
// For finding child: If child at n then parent at (n-1)/2
// FYI: Same as binary search tree except some cases.
// MaxBinaryHeap: Parent always greater than children’s.
// MinBinaryHeap: Parent always lesser than children's.
// FYI: Insert: Insert element in last index (push) then check inserted element with parent if greater than parent then swap with parent loop through it.
// FYI: Remove (Extract): Remove element from first index (shift) end put last element to first index (unshift) then check the updated element with its left and right child if lesser than swap loop through it.
