function swap(arr, swapIndex, i) {
  const temp = arr[swapIndex];
  arr[swapIndex] = arr[i];
  arr[i] = temp;
}
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// ------------
// Time Complexity: If array of items are 32 then we splitting it 5 times (16,8,4,2,1)
// 1. Best: O(n log n)
// 2. Avg: O(n log n)
// 3. Worst(Array is already sorted and if we take pivot as first item): O(n^2)
//Space Complexity : O(n)
