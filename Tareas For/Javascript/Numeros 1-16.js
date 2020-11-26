function EventListener(){
    document.getElementById("NumerosTres").addEventListener("click" , NumerosClick());
}

function NumerosClick(){

    var Numeros = document.getElementById("TresNTres");

    Numeros.innerText = "";
    
    for(var x=1; x <= 16; x+=3){
        var TresNTres = document.createElement("li");
        TresNTres.setAttribute("class", "list-group-item");
        TresNTres.innerText = x;
        Numeros.appendChild(TresNTres);
    }
}