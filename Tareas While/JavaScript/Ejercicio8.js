function EventListener(){
    document.getElementById("button").addEventListener("click", buttonclick());
}

function buttonclick(){

    var Print = document.getElementById("ul");

    Print.innerText = "";

    var x = 16;

    while(x >= 6){
        x --
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerText = x;
        Print.appendChild(li);
    }
}