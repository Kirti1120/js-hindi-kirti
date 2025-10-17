const user = {
    username : "kirti",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);
         console.log(this);      
    }
}
 user.welcomeMsg()            //kirti , welcome to website
 user.username = "sam"
 user.welcomeMsg()            //sam , welcome to website
 console.log(this);         // jr apan this globally print karat aslo trr empty denarr {}
 

 /// "this" he fakt objects madhech kam kart fakt function tayar karun he this apan vapru shakat nahi eg.,

 function chai(){
    let username = "kirtu"
    console.log(this.username);
    
 }
 chai()                     //undefined     
 
 //********* Arrow Function ******************/

 const chaii =  () => {
     let username = "kirtu"
    console.log(this);          //undefined
 }

 const addTwo = (num1 ,num2) => {
    return num1 + num2 
 }
 console.log(addTwo(4,5));           //9 (curly braces lavl tr return keyword vapraylach lagto)

             // OR

//const addTwo = (num1 , num2) => (num1 + num2)  // roumd braces lavl trr return keyword waparl nahi tr chaltay ani te ekach lie madhe lihaych br ka

//objects sathi
//const addTwo = (num1 , num2) => ({username : "kirti"})   //round braces lavaych mg curly braces lavaych


