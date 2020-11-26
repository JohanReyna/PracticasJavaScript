function EventListener(){
    document.getElementById("Ejercicio").addEventListener("click", ClickEjercicio());
}

function ClickEjercicio(){

    var PrintPromedio = document.getElementById("Alert1");

    var PrintSuma = document.getElementById("Alert2");

    var contador1=0, contador2=0, sumapares=0, promedio=0, sumaimpares=0; 



    for(var x=1; x<=30; x++){

        var Introduce = Number(prompt("Ingresa un número"));

        //el numero que introduces si es mayor a 0 y el numero que introduces se divide entre 2 y residuo se compara == 0 si, si el numero es par, si no el numero es inpar
        //10 / 2 = 5 % "Residuo" == 0 
        if(Introduce > 0 && Introduce % 2 == 0){
            contador1++; //contador = contador + 1 esta contando cuantos numeros pares son
            sumapares = Introduce + sumapares;
            promedio = sumapares / contador1;
        }else{
            contador2++; //cuantos numeros inpares se estan contando
            sumaimpares = Introduce + sumaimpares;
        }

        PrintPromedio.innerText = "El promedio de los números pares es: " + promedio;

        PrintSuma.innerText = "La suma de los números impares son: " + sumaimpares;
        
    }
}

// 1 2 3 4 5 6 7 8 9 10