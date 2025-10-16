//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "kirti@gh.com",
    fullname : {
        userfullname : {
            firstname : "kirti",
            lastname : "shelke"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "d", 4:"e"}
const obj3 = {5: "f", 6:"g"}

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//************* Object Destructuring ************** */

const course = {
    name : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
const {courseInstructor : instructor} = course //change kel 
console.log(instructor);   //hitesh

