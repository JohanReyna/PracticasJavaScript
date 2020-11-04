function EventListener(){
        document.getElementById("Calculardias").addEventListener("click", Calculodedias());
}

function Calculodedias(){

    var dias = Number(document.getElementById("dias").value);

    var imprimirdiassemana = document.getElementById("imprimirdiassemanas");

    if(dias == 1){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Domingo";
    }
    if(dias == 2){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Lunes";
    }
    if(dias == 3){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Martes";
    }
    if(dias == 4){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Miercoles";
    }
    if(dias == 5){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Jueves";
    }
    if(dias == 6){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Viernes";
    }
    if(dias == 7){
        imprimirdiassemana.innerText = "El dia que Ingresaste es Sabado";
    }
}