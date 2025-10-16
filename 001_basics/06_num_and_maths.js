const score = 400
console.log(score);             //400

const balance = new Number(100)
console.log(balance);                         //[Number : 100]
console.log(balance.toString());             //100
console.log(balance.toString().length);       //3
console.log(balance.toFixed(2));              //100.00
 
const otherNum = 123.8937
console.log(otherNum.toPrecision(4));         //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   //10,00,000


//******************************* MATHS ******************** */

console.log(Math);
console.log(Math.abs(-4));           //4 (converts any negative to absolute positive num)
console.log(Math.ceil(4.2));         //5
console.log(Math.floor(4.9));        // 4
console.log(Math.min(4,5,6));        //4
console.log(Math.max(4,5,6));         //6

console.log(Math.random());            //0.533692288

console.log((Math.random() * 10) + 1);  //5.9958488136

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min + 1) ) + min)  //13