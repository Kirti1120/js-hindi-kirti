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
One()