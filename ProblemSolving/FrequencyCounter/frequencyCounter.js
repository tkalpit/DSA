//To remove O(n^2) complexity
//Store counter in object key value pair then compare
//Below function will check each element of arr2 value is square of arr1 value
//We can use multiple for loop instead of nested loop
function same(arr1, arr2){
    const obj1 = {};
    const obj2 = {};
    for(let val of arr1){
        obj1[val] = ++obj1[val] || 1;
    }
    for(let val of arr2){
        obj2[val] = ++obj2[val] || 1;
    }
    for(let key in obj1) {
        if(obj1[key] !== obj2[Math.pow(key, 2)]){
            return false;
        }
    }
    return true;

}



console.log(same([1,2,3,2], [9,5,1,4])); // false
console.log(same([1,2,3,2], [9,4,1,4])); // true