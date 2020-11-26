function EventListener(){
    document.getElementById("Boton").addEventListener("click", BotonClick());
}

function BotonClick(){
     
    var Array = ["Moto", "soto", "Abaco", "abeja", "Sapo", "nieve", "Zumba", "barco"];

    var ImprimirInfo = document.getElementById("Print1");

    Array.sort();

    ImprimirInfo.innerText = Array
}