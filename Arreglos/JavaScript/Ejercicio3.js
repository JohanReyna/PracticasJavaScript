function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){
    //Crea variables para arreglo
    var ArregloNumerico = [1,4,2,9,11,44,111,7,4];
    //Crea variables para imprimir el resultado
    var menoramayor = document.getElementById("Imprimirmenoramayor");

    var mayoramenor = document.getElementById("Imprimirmayoramenor");

    ArregloNumerico.sort();

    menoramayor.innerText = "Los numero ordenados de menor a mayor son: " + ArregloNumerico.sort(MenorAMayor);
    mayoramenor.innerText = "Los numero ordenados de mayor a menor son: " + ArregloNumerico.sort(MayorAMenor());

}
    //Mandar
function MenorAMayor(elem1, elem2){
    //return se encarga de finalizar la operación y devolver el resultado
    return elem1 - elem2;
    //1-4, 1-2, 1-9
    //4-2, 2-9, 2-11
    //4-9, 4-11
}

function MayorAMenor(elem1, elem2){
    return elem1 - elem2; //else if (elem1 >)
}