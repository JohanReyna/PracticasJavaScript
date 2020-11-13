function NumerosMayoresMenores(){
    //Prompt es para ingresar informacion en un cuadro de texo en las alertas de la página
    var Nnumeros = prompt("¿Cuantos números en total vas a ingresar?");  //10 números
    var contador = 0, contadorneg = 0;
    var contador2 = 1, contadorneg2 = 1;

    //for(var x=0; x<4; x++)
    //for (inicializar una variable; realizar la comparacion con la variable; contar en 1 en 1 la variable);
    for(var x=0; x < Nnumeros; x++)
    var numero = prompt("Ingresa un número");
    //Se tiene un  if dentro del for para poder hacer la comparación de los números
    if(numero >= 0){
        contador = contador + contador2;
    }else{
        contadorneg = contadorneg + contadorneg2;
    }
alert("Los numeros mayores o iguales a cero son: " + contador + " Los menores a cero son contador " + contadorneg);
}
