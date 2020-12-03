function EventListener(){
    document.getElementById("Opcion1").addEventListener("click", ClickOpcion1());
    document.getElementById("Opcion2").addEventListener("click", ClickOpcion2());
    document.getElementById("Opcion3").addEventListener("click", ClickOpcion3());
}

function ClickOpcion1(){

    var ImprimirInfo1 = document.getElementById("PrintInfo1");

    var a = 150, b = 78;

    ImprimirInfo1.innerText = "El Resultado de la resta es: " + (a - b);
}

function ClickOpcion2(a,b){

    var ImprimirInfo2 = document.getElementById("PrintInfo2");

    a = 325; b = 75;

    ImprimirInfo2.innerText = "El Resultado de la resta es: " + (a - b);
}
function ClickOpcion3(a,b){
    return (a - b);

}

var ImprimirInfo3 = document.getElementById("PrintInfo3");
ImprimirInfo3.innerText = "El resultado de la Resta es: " + (ClickOpcion3(152, 52));