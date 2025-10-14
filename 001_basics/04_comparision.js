// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2" > 1);  //true
// console.log("02" > 1); //true

console.log(null > 0);   //false
console.log(null == 0);   //false
console.log(null >= 0);   //true  the reason is that an equality check == and comparision > <>= <= work differently. Comparision convert null to number treating it as 0. Thats why null >= 0 is true amd null > 0 is false

console.log(undefined >= 0);  //false
console.log(undefined >= 0);  //false
console.log(undefined >= 0);  //false