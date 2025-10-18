// for-of loop



/// arrays vrti for-of loop
const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);        //1 2 3 4 5
    
}

/// strings vrti for-of loop

const greetings ="hello"
for(const greet of greetings)
{
     console.log(greet); 
}

//Maps varti for-of loop

const map = new Map()
map.set('IN' , "INDIA")
map.set('US' , "UNITED STATE")
map.set('FR' , "FRANCE")
console.log(map);
