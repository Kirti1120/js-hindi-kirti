// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);             //1

const myHeros = ["shaktiman", "naagraj"]

//other declaration of array is as follows :
const myArr2 = new Array(0, 1, 2, 3, 4)

// Array Method

myArr.push(5)              //0,1,2,3,4,5
myArr.push(6)               //0,1,2,3,4,5,6
myArr.pop()                 //0,1,2,3,4,5 (removes last element)
myArr.unshift(9)            // 9,0,1,2,3,4,5 (add 9 to the start of array)
myArr.shift()               //0,1,2,3,4,5
console.log(myArr);

console.log(myArr.includes(10));   //false
console.log(myArr.indexOf(25));    //-1
console.log(myArr.indexOf(2));    //2

const newArr = myArr.join()   //converts array to string 

console.log(typeof newArr);    //string
console.log(typeof newArr);    //0,1,2,3,4,5,5

//Slice , splice

console.log("A :" , myArr);     //A : [0,1,2,3,4,5,5]
const myn1 = myArr.slice(1 , 3)    
console.log(myn1);             // A : [0,1,2,3,4,5,5]  [1,2]

console.log("B :" , myArr);    //B : [0,1,2,3,4,5,5]
const myn2 = myArr.splice(1 , 3) 
console.log("C" , myArr);

console.log(myn2);              // B : [0,1,2,3,4,5,5]  [1,2,3]







