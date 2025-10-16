// Dates


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());           //Thu Oct 16 2025 08:30:05 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());    //10/16/2025, 8:30:52 AM
console.log(myDate.toDateString());       //Thu Oct 16 2025
console.log(myDate.toLocaleDateString());  //10/16/2025
console.log(typeof myDate);               //object


//let myCreatedDate = new Date(2025 , 0 , 23)
let myCreatedDate = new Date("01-14-2025")
console.log(myCreatedDate.toDateString());    //Thu Jan 23 2025
console.log(myCreatedDate.toLocaleString());  //1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


