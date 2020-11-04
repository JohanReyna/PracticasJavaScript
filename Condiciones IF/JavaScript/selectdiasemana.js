function EventListener(){
    document.getElementById("semana").addEventListener("click" , CalcularDias());
}

function CalcularDias(){

    var selectdias = document.getElementById("dias").value;

    var Printresultado = document.getElementById("imprimirdias");

    if(selectdias == "1"){
        Printresultado.innerText = "El dia que ingresaste es Lunes";
    }
    if(selectdias == "2"){
        Printresultado.innerText =  "El dia que ingresaste es Martes";
    }
    if(selectdias == "3"){
        Printresultado.innerText =  "El dia que ingresaste es Miercoles";
    }
    if(selectdias == "4"){
        Printresultado.innerText =  "El dia que ingresaste es Jueves";
    }
    if(selectdias == "5"){
        Printresultado.innerText =  "El dia que ingresaste es Viernes";
    }
    if(selectdias == "6"){
        Printresultado.innerText =  "El dia que ingresaste es Sabado";
    }
    if(selectdias == "7"){
        Printresultado.innerText =  "El dia que ingresaste es Domingo";
    }
}