function EventListener(){
    document.getElementById("Button").addEventListener("click", Buttonclick());
}

function Buttonclick(){

    var Numeros = prompt("¿Cuántos números vas a ingresar?")

    var num = document.getElementById("Alerta1");

    var contador = 0, contadorneg = 0;

    var contador2 = 1, contadorneg2 = 1;

    var x = 0;

    while(x <= Numeros){
        var numero = prompt("ingresa un numero");

        if(numero >= 0){
            contador = contador + contador2;
        }else{
            contadorneg = contadorneg + contadorneg2;
        }
        x++
    }
    num.innerText = " Los numeros mayores o iguales a cero son: " + contador + " Los numeros menores a cero son: " + contadorneg;
}
