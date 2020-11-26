function EventListener(){
    document.getElementById("boton").addEventListener("click", botonclick());
}

function botonclick(){

    var Numero = Number(document.getElementById("input").value);

    var PrintResultado = document.getElementById("Print");
    
    if( Numero == 1000){
        PrintResultado.innerText = "Ganaste el premio";
    }else
        PrintResultado.innerText = "Siga Participando";
    
}