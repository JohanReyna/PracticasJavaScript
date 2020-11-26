function EventListener(){
    document.getElementById("Boton").addEventListener("click", BotonClick());
}

function BotonClick(){
     
    var Arreglo = ["bicicleta", "silla", "cama", "computadora", "celular", "viento", "salmon", "pared"];

    var PrintInfo = document.getElementById("PrintInfo");

    Arreglo.sort();

    PrintInfo.innerText = Arreglo
}