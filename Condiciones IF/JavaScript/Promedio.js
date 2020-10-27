function EventListener(){
    document.getElementById("calculapromedio").addEventListener("click", CalcularPromedio());
}

function CalcularPromedio(){

    var Cal1 = Number(document.getElementById("cal1").value);

    var Cal2 = Number(document.getElementById("cal2").value);
    
    var Cal3 = Number(document.getElementById("cal3").value);
    
    var Cal4 = Number(document.getElementById("cal4").value);

    var Resultado = Cal1 + Cal2 + Cal3 + Cal4

    var PrintResultado = document.getElementById("ResultadoF");

    if (Resultado = Cal1 + Cal2 + Cal3 + Cal4){
        PrintResultado.innerText = Resultado / 4
    }
}