function EventListener(){
    document.getElementById("button").addEventListener("click", buttonclick());
}

function buttonclick(){

    var Print = document.getElementById("ul");

    Print.innerText = "";

    var x = 8;

    while(x <= 18){
        x +=2
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerText = x;
        Print.appendChild(li);
    }
}