function EventListener(){
    document.getElementById("MThree").addEventListener("click" , ClickMultiplo());
}

function ClickMultiplo(){

    var Three = document.getElementById("Lista");

    Three.innerText = "";

    for(var x=50; x>=5; x--){
    if(x % 3 == 0){
        var Three2 = document.createElement("li");
        Three2.setAttribute("class", "list-group-item");
        Three2.innerText = x;
        Three.appendChild(Three2);
        }
    }
}