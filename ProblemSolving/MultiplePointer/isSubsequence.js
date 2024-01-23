
function isSubsequence(str1, str2) {
    if(str1.length > str2.length) {
        return false;
    }
    let i = 0;
    let j = 0;
    while(i < str1.length) {
        if(j === str2.length) {
            return false;
        }
        if(str1[i] === str2[j]){
            i++;
        }
        j++;
    }
    return true;
    
}


console.log(isSubsequence('ello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)