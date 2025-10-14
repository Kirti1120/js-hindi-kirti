let score = "33abc"

console.log(typeof score);  //string

let valueInNumber = Number(score)

console.log(typeof valueInNumber);  //number
console.log(valueInNumber);         //NaN


//"33" easily converted to=>33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   //true

// 1 => true, 0 => false
// ""=> false
// "kirti" => true

let someNum = 33

let stingNumber = String(someNum)
console.log(stingNumber);         //33
console.log(typeof stingNumber);  //string

//***************OPERATIONS***************//

let value =3 
let negValue = -value
console.log(negValue);     //-33

//Basics Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "kirti"
let str3 = str1+str2
console.log(str3);    //hellokirti
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //1+2=3 therefore 32

let gameCounter = 100
gameCounter++
console.log(gameCounter);

