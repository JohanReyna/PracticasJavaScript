function EventListener(){
    document.getElementById("Numero").addEventListener("click" , NumeroClick());
}

function NumeroClick(){

    var Print = document.getElementById("lista");

    Print.innerText = "";
    
    for(var x=1; x <= 20; x++){
        var PrintN = document.createElement("li");
        PrintN.setAttribute("class", "list-group-item");
        PrintN.innerText = x;
        Print.appendChild(PrintN);
    }
}