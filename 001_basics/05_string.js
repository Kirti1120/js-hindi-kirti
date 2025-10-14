const name = "kirti"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('kirti-hc-')
console.log(gameName[0]);                 //k
console.log(gameName.__proto__);          //{}
console.log(gameName.length);             //9
console.log(gameName.toUpperCase());      //KIRTI-HC-
console.log(gameName.charAt(2));          //r
console.log(gameName.indexOf('i'));       //1

const newString = gameName.substring(0, 4)
console.log(newString);                   //kirt

const anotherString = gameName.slice(-8,4)
console.log(anotherString);               //irt

const newStringOne = "  kirti  "
console.log(newStringOne);              //  kirti (with space)
console.log(newStringOne.trim());       //kirti(without space)

const url = "https://kirti.com/kirti%20shelke"
console.log(url.replace('%20', '-'));      //https://kirti.com/kirti-shelke
console.log(url.includes('kirti'));        //true(means present)
console.log(url.includes('kirti'));        //false
console.log(gameName.split('-'));         //converting string to array(['kirti', 'hc', ''])


