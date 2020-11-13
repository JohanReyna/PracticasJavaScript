function EventListener(){
    document.getElementById("NumerosPar").addEventListener("click" , NumerosPares());
}

function NumerosPares(){

    var NumeroPar = document.getElementById("DosNdos");
    
    for(var x=10; x <= 20; x+=2){
        var DosNdos = document.createElement("li");

        DosNdos.setAttribute("class", "list-group-item");
        DosNdos.innerText = x;
        
        NumeroPar.appendChild(DosNdos);
    }
}