function EventListener(){
    document.getElementById("Opcion1").addEventListener("click", ClickOpcion1());
    document.getElementById("Opcion2").addEventListener("click", ClickOpcion2());
    document.getElementById("Opcion3").addEventListener("click", ClickOpcion3());
}

function ClickOpcion1(){

    var ImprimirInfo1 = document.getElementById("PrintInfo1");

    var a = 58, b = 58;

    ImprimirInfo1.innerText = "El Resultado de la suma es: " + (a + b);
}

function ClickOpcion2(a,b){

    var ImprimirInfo2 = document.getElementById("PrintInfo2");

    a = 15; b = 90;

    ImprimirInfo2.innerText = "El Resultado de la suma es: " + (a + b);
}
//Desarrolle una funcion con 2 párametros
function ClickOpcion3(a,b){
//Estoy sumando los 2 párametros y voy retornar la suma (devolver la suma)
    return (a + b);

}

var ImprimirInfo3 = document.getElementById("PrintInfo3");
//Llamando a la funcion ClickOpcion3 y en los párametros le estoy poniendo el valor a la suma (a,b)
ImprimirInfo3.innerText = "El resultado de la suma es: " + (ClickOpcion3(5, 5));