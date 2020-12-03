function EventListener(){
    document.getElementById("Button").addEventListener("click", Buttonclick());
}

function Buttonclick(){

    var verdad = true;
    var falso = false;
    var a = 10; b = 20;
    var print = document.getElementById("Print");
    var print2 = document.getElementById("Print2");
    var print3 = document.getElementById("Print3");
    var print4 = document.getElementById("Print4");

    print.innerText = "El resultado de sumar 2 variables de tipo booleano es: " + (verdad + falso);

    print2.innerText = "El resultado de sumar true + una variable numerica es: " + (verdad + a);

    print3.innerText = "El resultado de sumar false + una variable numerica es: " + (falso + b);

    print4.innerText = "El resultado de la suma de las variables booleanas en string es: " + verdad.toString() + falso.toString();
}