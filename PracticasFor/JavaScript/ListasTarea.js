function EventListener(){
    document.getElementById("listas").addEventListener("click" , Clicklistas());
}

function Clicklistas(){
    var listas = document.getElementById("listas2");
    
    for(var x=0; x <= 100; x+=2){
        var listas2 = document.createElement("li");
        listas2.setAttribute("class", "list-group-item");
        listas2.innerText = x;
        listas.appendChild(listas2);
    }
}