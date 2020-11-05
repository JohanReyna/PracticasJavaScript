function EventListener(){
    document.getElementById("Calculacalf").addEventListener("click" , Calcular());
}

function Calcular(){

    var Calificacion = document.getElementById("Calif").value;

    var Printresultado = document.getElementById("Resultado");

    if (Calificacion == "10"){
        Printresultado.innerText = "TU CALIFICACIÓN ES A";
    }
    
    if (Calificacion == "9"){
        Printresultado.innerText = "TU CALIFICACIÓN ES B";
    }

    if (Calificacion == "8"){
        Printresultado.innerText = "TU CALIFICACIÓN ES C";
    }

    if (Calificacion == "7" || Calificacion == "6"){
        Printresultado.innerText = "TU CALIFICACIÓN ES D";
    }

    if (Calificacion == "5" || Calificacion == "4" || Calificacion == "3" || Calificacion == "2" || Calificacion == "1" || Calificacion == "0"){
        Printresultado.innerText = "TU CALIFICACIÓN ES F";
    }
}