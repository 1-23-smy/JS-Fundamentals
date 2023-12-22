//Nullish operator works only on null and undefined. If it is assigned by null ?? val or undefined ?? val then the right side value is returned. else the left one is returned.

let val1=null ?? 10
let val2=undefined ?? 12
let val3=10 ?? 5
console.log(val1);
console.log(val2);
console.log(val3);