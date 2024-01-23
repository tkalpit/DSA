//When we need to compare or check each value of array with other values of arra then we should multiple pointer
//Multiple pointer means one point to start of array and other to end of array
//Instead of nested for loop we should use multiple pointer

function sumZero(arr1) {
    let left = 0;
    let right = arr1.length - 1;
    while (left < right) {
        const sum = arr1[right] + arr1[left]; 
        if(sum === 0){
            return [arr1[left], arr1[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,4,5,6]));
console.log(sumZero([-4,-3,-2,-1,0,6]));