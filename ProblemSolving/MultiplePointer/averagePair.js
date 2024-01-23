function averagePair(arr, num) {
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        const sum = parseFloat((arr[i] + arr[j]) / 2);
        if(sum === num){
            return true;
        } else if(sum < num) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}
console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); //false