function countUniqueValues(arr1){
    let i = 0;
    let j = i+1;
    if(arr1.length === 0) {
        return i;
    }
    while(j < arr1.length) {
        if(arr1[i] === arr1[j]) {
            j++;
        } else {
            i++;
            arr1[i] = arr1[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4