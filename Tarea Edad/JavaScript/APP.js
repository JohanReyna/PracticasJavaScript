//Elaborar un algoritmo que solicite la edad de 2 hermanos y muestre un mensaje
//indicando la edad del mayor y cuantos años de diferencia tiene con el menor.

function EventListener(){
    document.getElementById("diferenciaredad").addEventListener("click", DiferenciarEdad());
}

function DiferenciarEdad()
{
    var edad1 = Number(document.getElementById("EDAD1").value);
    var edad2 = Number(document.getElementById("EDAD2").value);
    var printReseultado = document.getElementById("Resultado");
    var Diferencia = 0;
    var Diferencia2 = document.getElementById("Resultado2")
    
    if( edad1 > edad2 ){
        printReseultado.innerText = "Hermano 1 es mayor con" + " " + edad1 + " " + "años";
        Diferencia = edad1 - edad2;
    }else{(edad1 < edad2 )
        printReseultado.innerText = "Hermano 1 es menor con" + " " + edad2 + " " + "años";
        Diferencia = edad2 - edad1
    }
    Diferencia2.innerText = "La diferencia de edad es de" + " " + Diferencia + " " + "años";
}
