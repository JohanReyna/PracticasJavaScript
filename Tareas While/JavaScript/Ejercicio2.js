function EventListener(){
    document.getElementById("button").addEventListener("click", buttonclick());
}

function buttonclick(){

    var lista = document.getElementById("Lista");

    lista.innerText = "";

    var x = -2;

    while(x <= 98){
        x +=2
        var num = document.createElement("li");
        num.setAttribute("class", "list-group-item");
        num.innerText = x;
        lista.appendChild(num);
    }
}