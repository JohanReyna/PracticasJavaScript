function EventListener(){
    document.getElementById("Button").addEventListener("click", Buttonclick());
}

function Buttonclick(){
    var Verdad = true
    var Falso = false
    var Print1 = document.getElementById("Print1");
    var Print2 = document.getElementById("Print2");
    var Print3 = document.getElementById("Print3");
    var Print4 = document.getElementById("Print4");
    var Print5 = document.getElementById("Print5");
    var Print6 = document.getElementById("Print6");
    var Print7 = document.getElementById("Print7");
    var Print8 = document.getElementById("Print8");
    var Print9 = document.getElementById("Print9");
    var Print10 = document.getElementById("Print10");
    var Print11 = document.getElementById("Print11");
    var Print12 = document.getElementById("Print12");
    var Print13 = document.getElementById("Print13");
    var Print14 = document.getElementById("Print14");

    Print1.innerText = "El numero 100 en booleano es: " + Verdad;
    Print2.innerText = "El numero 3.14 en booleano es: " + Verdad;
    Print3.innerText = "El numero -15 en booleano es: " + Verdad;
    Print4.innerText = "La palabra 'Hello' en booleano es: " + Verdad;
    Print5.innerText = "La palabra 'false' en booleano es: " + Verdad;
    Print6.innerText = "la suma de los numeros en booleano es: " + Verdad;
    Print7.innerText = "la comparación de los en booleano es:  " + Verdad;
    Print8.innerText = "El valor booleano de 0 (cero) es: " + Falso;
    Print9.innerText = "El valor booleano de -0 (menos cero) es: " + Falso; 
    Print10.innerText = "El valor booleano de '' (cadena vacía) es: " + Falso;
    Print11.innerText = "El valor booleano de undefined es: " + Falso;
    Print12.innerText = "El valor booleano de null es: " + Falso;
    Print13.innerText = "El valor booleano de false es: " + Falso;
    Print14.innerText = "El valor booleano de NaN es: " + Falso;
}