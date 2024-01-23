//When we need to check consicutive values
//Examples like maxSubArraySum, find out smallest or largest substring from string etc.
function maxSubArraySum(arr1, num) {
    if(num > arr1.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0; i< num ; i++) {
        maxSum = maxSum + arr1[i];
    }
    tempSum = maxSum;
    for(let i=num; i< arr1.length; i++) {
        tempSum = tempSum - arr1[i - num] + arr1[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));