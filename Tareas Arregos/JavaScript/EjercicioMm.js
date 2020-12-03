function EventListener(){
    document.getElementById("Button").addEventListener("click", Buttonclick());
}

function Buttonclick(){

    var Array = [33, 2, 36, 55, 4, 1];
    var ArrayO = [33, 2, 36, 55, 4, 1];
    var menoramayor = document.getElementById("Print1");
    var mayoramenor = document.getElementById("Print2");
    var ImprimirOriginal = document.getElementById("Print3");

    menoramayor.innerText = "Los numeros ordenados de menor a mayor son:" + Array.sort(MenorAMayor);
    mayoramenor.innerText = "Los numeros ordenados de mayor a menor son:" + Array.sort(MayorAMenor);
    ImprimirOriginal.innerText = "El arreglo original es: " + ArrayO;
}

function MenorAMayor(elem1, elem2){
    return elem1 - elem2;
}

function MayorAMenor(elem1, elem2){
    return elem2 - elem1;
}