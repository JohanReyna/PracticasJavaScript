function EventListener(){
    document.getElementById("calculapromedio").addEventListener("click", CalcularPromedio());
}

function CalcularPromedio(){

    var Cal1 = Number(document.getElementById("cal1").value);

    var Cal2 = Number(document.getElementById("cal2").value);
    
    var Cal3 = Number(document.getElementById("cal3").value);
    
    var Cal4 = Number(document.getElementById("cal4").value);

    var PrintResultado2 = document.getElementById("ResultadoF2")

    var PrintResultado = document.getElementById("ResultadoF");

    var valorminimo, Resultado;


    if(Cal1 < Cal2 && Cal1 < Cal3 && Cal1 < Cal4){
        valorminimo = Math.min(Cal1, Cal2, Cal3, Cal4);
        PrintResultado2.innerText = "El Numero Minimo es " + valorminimo;
        Resultado = (Cal2 + Cal3 + Cal4) / 3;
        PrintResultado.innerText = "El Promedio es " + Resultado;
    }

    if(Cal2 < Cal1 && Cal2 < Cal3 && Cal2 < Cal4){
        valorminimo = Math.min(Cal1, Cal2, Cal3, Cal4);
        PrintResultado2.innerText = "El Numero Minimo es " + valorminimo;
        Resultado = (Cal1 + Cal3 + Cal4) /3;
        PrintResultado.innerText = "El Promedio es " + Resultado;
    }

    if(Cal3 < Cal1 && Cal3 < Cal2 && Cal3 < Cal4){
        valorminimo = Math.min(Cal1, Cal2, Cal3, Cal4);
        PrintResultado2.innerText = "El Numero Minimo es " + valorminimo;
        Resultado = (Cal1 + Cal2 + Cal4) / 3;
        PrintResultado.innerText = "El Promedio es " + Resultado;
    }

    if(Cal4 < Cal1 && Cal4 < Cal2 && Cal4 < Cal3){
        valorminimo = Math.min(Cal1, Cal2, Cal3, Cal4);
        PrintResultado2.innerText = "El Numero Minimo es " + valorminimo;
        Resultado = (Cal1 + Cal2 + Cal3) / 3;
        PrintResultado.innerText = "El Promedio es " + Resultado;
    }

}