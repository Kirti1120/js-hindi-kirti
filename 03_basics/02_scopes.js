let a = 10
const b = 20
var c = 30

if (true) {
  let a = 100
  const b = 200
  var c = 300
  console.log("Inside block:", a, b, c)
}

console.log("Outside block:", a, b, c)


function One(){
  const username = "kirti"
   function Two(){
    const website = "youtube"
    console.log(username);
    
   }
   Two()
}
//One()

if(true){
  const username = "kirti"
  if(username === "kirti"){
    const website = " youtube"
    console.log(username + website);         // kirti youtube
    
  }
}

//************************ Interesting **************** */

function addOne(num){
  return num + 1
}
console.log(addOne(5));          //6      

             /// OR

const addTwo = function(num){
        return num + 1
}
console.log(addOne(7));          //fakt he ahe te function declaration chya aadhi vapru shakat nahi error yeto mg