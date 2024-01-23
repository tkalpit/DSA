function validAnagram(str1, str2) {
    const obj1 = {};
    const obj2 = {};
    if(str1.length !==  str2.length) {
        return false;
    }
    for(let val of str1){
        obj1[val] = ++obj1[val] || 1;
    }
    for(let val of str2){
        obj2[val] = ++obj2[val] || 1;
    }

    for(let key in obj1){
        if(!(key in obj2)){
            return false;
        }
        
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;

}


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext'));// true