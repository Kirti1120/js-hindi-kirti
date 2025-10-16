const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// सगळे DC heros Marvel array मध्ये add करण्यासाठी
marvel_heros.push(...dc_heros);
// console.log(marvel_heros);           //["thor", "ironman", "spiderman", "superman", "flash", "batman"]
// console.log(marvel_heros[3][1]);     //flash

// const all_heros = marvel_heros.concat(dc_heros);    
// console.log(all_heros);            //["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

//Spread operator to combine both arrays

const new_heros = [...marvel_heros, ...dc_heros]
console.log(new_heros);  

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const another_arr1 = another_arr.flat(Infinity)
console.log(another_arr1);          //[1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("kirti"));       //false
console.log(Array.from("kirti"));           //[ 'k', 'i', 'r', 't', 'i' ]
console.log(Array.from({name : "kirti"}));     //[] (empty becooz we need to tell him weather we want to make array of key or object)


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));    //[ 100, 200, 300 ]

