function EventListener(){
    document.getElementById("Button").addEventListener("click", ClickButton());
}

function ClickButton(){
    
    var año = Number(document.getElementById("input").value);

    var Resultado = document.getElementById("Print");

    if(año % 4 == 0 && año % 100 != 0){
        Resultado.innerText = "El año es Bisiesto"
    }else{
        Resultado.innerText = "El año no es Bisiesto"
    }
}