function EventListener(){
    document.getElementById("Button").addEventListener("click", Buttonclick());
}

function Buttonclick(){

    var Print = document.getElementById("listado");

    Print.innerText = "";

    var x = 0;

    while(x <= 45){
        x +=5
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerText = x;
        Print.appendChild(li);
    }
}