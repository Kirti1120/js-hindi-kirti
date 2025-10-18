// Falsy values :  false, 0, -0, BigInt, 0n, "", null, undefined, Nan

// Truthy values : "0", 'false', " ", [], {}, function(){}

const userEmail = []

if(userEmail){
    console.log("Got user email");         //ya madhe  Got user email print honar "[]" ya truthy value mule
}
else{
    console.log("Dont get user email");

}

//Array empty aahe ki nahi check karaych asel tr :
if(userEmail.length === 0){
    console.log("Array is empty");             //Array is empt
}

//Object empty aahe ki nahi check karaych asel tr :

const emptyObj = {}

if(Object.keys(emptyObj).length === o)
{
    console.log("Object is empty");            //Object is empty
}

// Nullish Coalescing Operator(??): null ,undefined

let val;
// val = 5 ?? 10                          //5
// val = null ?? 10                       //10
val = undefined ?? 15                  //15

console.log(val);


// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")  //more than 80
 
 

