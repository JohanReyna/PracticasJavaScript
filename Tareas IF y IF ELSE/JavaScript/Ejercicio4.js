function EventListener(){
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick(){

    var Dias = document.getElementById("Select").value;

    var Imprimir = document.getElementById("Print");

    if(Dias == "1"){
        Imprimir.innerText = "Seleccionaste Lunes";
    }
    
    if(Dias == "5"){
        Imprimir.innerText = "Seleccionaste Viernes";
    }


    if(Dias == "6"){
        Imprimir.innerText = "Seleccionaste Sabado";
    }


    if(Dias == "7"){
        Imprimir.innerText = "Seleccionaste Domingo";
    }
    
    if(Dias == "2" || Dias == "3" || Dias == "4"){
        Imprimir.innerText = "N/A";
    }
    
}