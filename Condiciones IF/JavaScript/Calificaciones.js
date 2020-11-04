function EventListener(){
    document.getElementById("Calificacion").addEventListener("click", Calificaciones());
}

function Calificaciones(){

    var cal = Number(document.getElementById("Calif").value);

    var PrintPuntaje = document.getElementById("ImprimirResultado");

    if (cal == 10){
        PrintPuntaje.innerText = "A";
    }
    
    if (cal == 9){
        PrintPuntaje.innerText = "B";
    }

    if (cal == 8){
        PrintPuntaje.innerText = "C";
    }

    if (cal == 6 || cal== 7){
        PrintPuntaje.innerText = "D";
    }

    if (cal == 5 || cal== 4 || cal== 3 || cal== 2 || cal== 1 || cal== 0){
        PrintPuntaje.innerText = "F";
    }
    

}