// Immediately Invoked function expressions (IIFE)

(function chai(){       //he named iife aahe
    console.log(`DB connected`);      //DB connected
    
}) ();

                 ///OR

( (name) => {             //he unnamed iife ahe
    console.log(`DB connected Two ${name}`);       //DB connected Two kirti
}) ('kirti')

