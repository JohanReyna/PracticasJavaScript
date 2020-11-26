 function EjemploFunciones(){

     console.log("Hola Mundo");
 }

function EjemploFunciones(a,b){
    //No se utiliza el var por que ya se estan declarando la variable
     a = 5; b = 3;
    
     console.log(a + b);

 }

function EjemploFunciones(a,b){
   
    // a = 4; b = 3;
   
    return console.log(a + b);

}

console.log(EjemploFunciones(6,7));