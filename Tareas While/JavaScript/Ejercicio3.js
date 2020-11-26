function EventListener() {
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick() {
    var Numero = Number(prompt("¿Cuantos números vas a ingresar"));

    var Print1 = document.getElementById("Alerts1");

    var Print2 = document.getElementById("Alerts2");

    var Print3 = document.getElementById("Alerts3");

    var contador = 0, sumapositivo = 0, contadornegativo = 0, sumanegativa = 0, promediototal = 0, promedio = 0, promedio2 = 0;

    var x = 0;

    while (x < Numero) {
        var num = Number(prompt("Ingresar un número"));
        
    if(num > 0){
        contador++;
        
        sumapositivo = num + sumapositivo;
        
        promedio = sumapositivo / contador;
    }else{
        contadornegativo++;

        sumanegativa = sumanegativa + num;

        promedio2 = sumanegativa / contadornegativo;
    }

    promediototal = (promedio + promedio2) / Numero;

        x++
    }

    Print1.innerText = "Los numeros mayores a 0 son: " + contador;
    
    Print2.innerText = "El promedio de los numeros positivos es: " + promedio;

    Print3.innerText = "El promedio de todos los numeros es: " + promediototal;
}

// Elabore una aplicación que lea n números enteros y realice lo siguiente:
// Cuantos números leídos fueron mayores que 0.
// Promedio de los números positivos.
// Promedio de todos los números.
