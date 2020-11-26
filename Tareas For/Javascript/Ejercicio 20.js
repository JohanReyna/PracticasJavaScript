function EventListener(){
    document.getElementById("PyN").addEventListener("click", ClickPyN());
}

function ClickPyN(){

    var PNumerospt = prompt("¿Cuántos números vas a ingresar?")

    var PrintNumerosLeidos = document.getElementById("Alert1");

    var PrintNumerosPromedioPositivos = document.getElementById("Alert2");

    var PrintPromedioNumeros = document.getElementById("Alert3");

    var Numeros = 0, Numeros2 = 0, NumerosP = 0, NumerosN = 0, promedio1 = 0, promedio2 = 0, PromedioF = 0;

    for(var x=0; x < PNumerospt ; x++){

        var NumeroI = Number(prompt("Ingresa un número"));

        //SI LOS NUMEROS SON POSITIVOS....
        if(NumeroI >=0){
            Numeros++;
            NumerosP = NumerosP + NumeroI;
            promedio1 = NumerosP / Numeros;
        }else{ //SI NO SON POSITIVOS ENTONCES...
            Numeros2++;
            NumerosN = NumerosN + NumeroI;
            promedio2 = NumerosN / Numeros2;
        }

        PromedioF = (promedio1 + promedio2) / PNumerospt;
        
        PrintNumerosLeidos.innerText = "Los Numeros Leídos Mayores a Cero son: " + Numeros;

        PrintNumerosPromedioPositivos.innerText = "El Promedio de Los Números Positivos es: " + promedio1;

        PrintPromedioNumeros.innerText = "El Promedio de Todos Los Números es: " + PromedioF;
    }
}

//Elabore una aplicación que lea n números enteros y realice lo siguiente:
//  Cuantos números leídos fueron mayores que 0.
//  Promedio de los números positivos.
//  Promedio de todos los números.
