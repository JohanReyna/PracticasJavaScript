function EventListener(){
    document.getElementById("NumerosDes").addEventListener("click" , NumerosDesendientes());
}

function NumerosDesendientes(){

    var NumeroDecender = document.getElementById("Disminucion");

    for(var x=15; x >= 5; x++){
        var Disminucion = document.createElement("li");

        Disminucion.setAttribute("class", "list-group-item");

        Disminucion.innerText = x;
        
        NumeroDecender.appendChild(Disminucion);
    }
}