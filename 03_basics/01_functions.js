function myName(){
    console.log("k");
    console.log("i");
    console.log("r");
    console.log("t");
    console.log("i");
}
myName()

// function addNum(num1, num2){
//     console.log(num1 + num2);
    
// }      OR

function addNum(num1, num2){
    // let result = num1 + num2
    // return result        OR
          
    return num1 +num2
}   

const result = addNum(4 , 3)
console.log("Result :", result);

function loginUser(userName){

    if(!userName){
        console.log("Plz enter username ");
        return            //ya nanter konti hi statement execute hot nhi
    }
    return `${userName} just logged in`   //${userName} -> userName chi value ithe thevli jate

}
console.log(loginUser("kirti"));             


function calculateCartPrice(...num1){
    return num1
    
}
console.log(calculateCartPrice(200,300,400));   //[200,300,400]

//creating  object using function

const user ={
    username : "kirti",
    price : "999"
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`);

}
//handleObj(user)  OR
handleObj({
    username : "kirti",
    price :" 567"
})

//Array using function

const myArr = [100,200,300]
function secondValue(getArr){
    return getArr[1]
}
console.log(secondValue(myArr));
