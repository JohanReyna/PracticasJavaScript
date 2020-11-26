function EventListener(){
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick(){

    var Print = document.getElementById("lista");

    Print.innerText = "";

    var x = 1;

    while(x <= 15){
        x +=3
        var num = document.createElement("li");
        num.setAttribute("class", "list-group-item");
        num.innerText = x;
        Print.appendChild(num);
    }
}