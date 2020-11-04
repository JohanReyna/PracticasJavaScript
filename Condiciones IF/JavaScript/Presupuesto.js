function EventListener(){
    document.getElementById("calculo").addEventListener("click" , realizacalculo())
}

function realizacalculo(){

    var Presupuesto = Number(document.getElementById("presupuesto").value);
    
    var Art1 = Number(document.getElementById("Articulo1").value);

    var Art2 = Number(document.getElementById("Articulo2").value);

    var Art3 = Number(document.getElementById("Articulo3").value);

    var Art4 = Number(document.getElementById("Articulo4").value);

    var PrintSuma = document.getElementById("SumaArticulos");

    var PrintResultado = document.getElementById("ResultadoFinal");

    var Suma = Art1 + Art2 + Art3 + Art4

    if(Suma < Presupuesto){
        PrintSuma.innerText = "El total de los articulos es de " + Suma
        PrintResultado.innerText = Presupuesto + " Si le alcanza el presupuesto"
    }else{
        PrintSuma.innerText = "El total de los articulos es de " + Suma
        PrintResultado.innerText = Presupuesto + " No le alcanza el presupuesto"
    }
}