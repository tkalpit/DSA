
function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for(let val of num1) {
        obj1[val] = ++obj1[val] || 1;
    }
    for(let val of num2) {
        obj2[val] = ++obj2[val] || 1;
    }
    for(let key in obj1) {
        if(!(key in obj2)){
            return false;
        }
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;

}
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); //false