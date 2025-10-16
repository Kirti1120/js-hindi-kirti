// singleton (objects constructor se banega to singleton banega)
//  Object.create   //constructor

//object literals

const mySym = Symbol("key")

let jsUser = {
    name : '"kirti',
    "full name" : "kirti shelke",
    [mySym] : "mykey",
    age : 23,
    location : "jaipur",
    email : "kirti@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Sunday"]
}

console.log(jsUser.email);         //kirti@google.com
console.log(jsUser["email"])       //kirti@google.com(another way)
console.log(jsUser["full name"])    //kirti shelke
console.log(jsUser[mySym]);         //vicharnar ->use Symbol as key and print the value (very imp) // [Symbol(key)]: 'mykey'
 jsUser.email ="hitesh@csg.com"
 Object.freeze(jsUser)
 jsUser.email = "chaiorcode@dgh.com"
 console.log(jsUser);

 // Function

 
 jsUser.greeting = function() {
  console.log("hello kirti");
};

jsUser.greetingTwo = function() {
  console.log(`hello js, ${this.name}`);
};

// ✅ फक्त call करायचं, console.log मध्ये नाही
jsUser.greeting();            //hello kirti
jsUser.greetingTwo();         //hello js, kirti


 