function EventListener(){
    //Mandar llamar al boton 1
    document.getElementById("click").addEventListener("click" , Daleclick());
    //Mandar llamar al boton 2
    document.getElementById("click2").addEventListener("click" , Darleclick2());
    //Mandar llamar al boton 3
    document.getElementById("click3").addEventListener("click" , Darleclick3());
}

//La funcion del primer boton
function Daleclick(){

    var salidaboton = document.getElementById("salida");

    //document.createElement se utiliza para crear un elemento en javascript
    var button = document.createElement("button");
    //setAttribute se utiliza para darle forma al boton, y esto es con una clase y el nombre de la clase
    button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
    button.setAttribute("id", "boton");// = id=("boton")
    button.setAttribute("type", "button");// = type=("button")
    button.setAttribute("onclick", "click2");// = onclick=("click2()")
    //Agregar un texto, le agregamos  un texto al boton
    button.innerText = "Boton impreso";
    //appendChild se utiliza para imprimir el boton en html
    salidaboton.appendChild(button);
}

//La funcion del segundo boton
function Darleclick2(){

    var salida2 = document.getElementById("salida1");

    for(var i=0; i < 5; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
    button.innerText = "Boton impreso varias veces";
    salida2.appendChild(button);
    }
}

function Darleclick3(){
    
    // var salida3 = document.getElementsByName("salida2");
    var listado = document.getElementById("listado");
    
    for(var x=0; x<5; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
    }


}