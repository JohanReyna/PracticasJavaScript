function EventListener(){
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick(){

    var Print = document.getElementById("list");

    Print.innerText = "";

    var x = 0;

    while(x <= 19){
        x ++
        var num = document.createElement("li");
        num.setAttribute("class", "list-group-item");
        num.innerText = x;
        Print.appendChild(num);
    }
}