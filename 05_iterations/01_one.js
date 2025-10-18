//for

for(let i =0; i<=10; i++){
    const element = i
    if(element == 5){
        console.log("5 is best num");
        
    }
    console.log(element);
    
}

for(let i =0; i<=5; i++){
    console.log(`outer loop value: ${i}`);
    
    for(let j=0; j<=5; j++){
       
        console.log(i + '*' + j + '=' +i*j)
    }
}

//Arrays print kara using for loop :

let myArr = ["kirti", "rohan", "sg"]

for(let i = 0; i<myArr.length; i++){
    let element = myArr[i]
    console.log(element);       //kirti rohan sg
    
}


//Break and continue in for loop

for(let i = 0; i<=10; i++){
    if(i == 5){
        console.log(`Detected 5` );
        //break                            //Vaalue of i is : 0
// Vaalue of i is : 1
// Vaalue of i is : 2
// Vaalue of i is : 3
// Vaalue of i is : 4
// Detected 5
        continue               
//Vaalue of i is : 0
// Vaalue of i is : 1
// Vaalue of i is : 2
// Vaalue of i is : 3
// Vaalue of i is : 4
// Detected 5
// Vaalue of i is : 6
// Vaalue of i is : 7
// Vaalue of i is : 8
// Vaalue of i is : 9
// Vaalue of i is : 10
    }
    console.log(`Vaalue of i is : ${i}` );
}
