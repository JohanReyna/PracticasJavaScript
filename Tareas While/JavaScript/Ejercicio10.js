function EventListener(){
    document.getElementById("boton").addEventListener("click", clickboton());
}

function clickboton(){

    var Print = document.getElementById("lista");

    Print.innerText = "";

    var x = 50;

    while(x <= 5 && x % 3 == 0){
        x ++
        var list = document.createElement("li");
        list.setAttribute("class", "list-group-item");
        list.innerText = x;
        Print.appendChild(list);
    }
}