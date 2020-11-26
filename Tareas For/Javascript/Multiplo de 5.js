function EventListener(){
    
    document.getElementById("Multiplos").addEventListener("click" , ClickMultiplo());

    document.getElementById("MultiplosXT").addEventListener("click" , ClickMultiploTX());
}

function ClickMultiplo(){

    var NumeroMultiplo = document.getElementById("ListasM");

    NumeroMultiplo.innerText = "";
    
    for(var x=5; x <= 50; x+=5){
        var Multiplo = document.createElement("li");
        Multiplo.setAttribute("class", "list-group-item");
        Multiplo.innerText = x;
        NumeroMultiplo.appendChild(Multiplo);
    }
}

function ClickMultiploTX(){

    var NumeroMultiplo2 = document.getElementById("ListasM2");

    NumeroMultiplo2.innerText = ""

    for(var x=5; x <=50; x+=5){
        var Multiplo2 = document.createElement("li");
        Multiplo2.setAttribute("class", "list-group-item");
        Multiplo2.innerText = x;
        NumeroMultiplo2.appendChild(Multiplo2);
    }if(x % 5 == 0){
        var Multiplo2 = document.createElement("li");
        Multiplo2.setAttribute("class", "list-group-item");
        Multiplo2.innerText = x;
        NumeroMultiplo2.appendChild(Multiplo2);
    }
}
