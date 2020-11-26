function EventListener(){
    document.getElementById("button").addEventListener("click", buttonclick());
}

function buttonclick(){

    var num = Number(document.getElementById("Input").value);

    var resultado = document.getElementById("Print");

    if(num > 0){
        num = num * 1;
        resultado.innerText = "Su valor absoluto es: " + num;
    }
    else
        num = num * -1;
        resultado.innerText = "Su valor absoluto es: " + num;
    
}
