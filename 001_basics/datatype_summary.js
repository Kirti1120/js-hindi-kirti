// 1. Primitive(it is call by value ie.,the changes are made in copy and not the original data )

//There are 7 types of primitive datatype : string, number, boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false

//const bigNumber = 236242847126

// 2. Non-Primitive/Reference type

// types : array, objects(imp) , functions

const arr = ["shaktiman", "doga", "naagraj"];
let myObj = {
    name = "kirti",
    age = 23,
}
const myFunction = function(){
  console.log("hello world");
}

//javascript is the dynamically type language as we dont need to declare the variables the type is checked at runtime
