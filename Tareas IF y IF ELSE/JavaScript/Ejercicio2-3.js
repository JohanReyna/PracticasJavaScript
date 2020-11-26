function EventListener(){
    document.getElementById("Boton").addEventListener("click", Botonclick());
    document.getElementById("Boton2").addEventListener("click", Botonclick2());
}

function Botonclick(){

    var Numero1 = Number(document.getElementById("Pinput").value);

    var Numero2 = Number(document.getElementById("Sinput").value);

    var PrintResultado = document.getElementById("Print");

    if(Numero1 < Numero2){
        PrintResultado.innerText = "El Primer Número Ingresado es el Menor";
    }else
        PrintResultado.innerText = "El Segundo Número Ingresado es el Menor";
    
    if(Numero1 == Numero2)
        PrintResultado.innerText = "N/A";
}

function Botonclick2(){

    var num1 = Number(document.getElementById("Pinput2").value);

    var num2 = Number(document.getElementById("Sinput2").value);

    var Resultado = document.getElementById("Print2");

    if(num1 <= num2){
        Resultado.innerText = "El Primer Número Ingresado es el Menor";
    }else
    Resultado.innerText = "El Segundo Número Ingresado es el Menor";
    
    if(num1 == num2)
    Resultado.innerText = "Son Inguales";
}