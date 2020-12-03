function EventListener(){
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick(){

    var lista = document.getElementById("print");


    var  laptop = {
        tamañopantalla:"15 Pulgadas",
        mouse:"Pad touch",
        teclado:"Retroiluminado",
        color:"Plata",
        precio: 20000,
    };

    var Celular = {
        pantalla: "Ultra HD",
        color: "Negro",
        peso: "1.5kg",
        tamañopantalla: "6 pulgadas",
        precio: 12000,
    };

    var Television = {
        precio: 10000,
        tamañopantalla: "65 pulgadas",
        peso: "23.2 kg",
        altura: "80.9 cm",
        ancho: "143.9 cm",
    };

    var smartwatch = {
        Ancho: "36cm",
        Altura: "51cm",
        tamañopantalla: "1.6 pulgadas",
        peso: "38 g",
    };

    var AparatosElectronicos = {
        Marca1: "Samsung",
        Marca2: "Sony",
        Marca3: "LG",
        Marca4: "HP",
    };

    var HP = {
        marca: AparatosElectronicos.Marca4,
        pantalla: laptop.tamañopantalla,
        mouse: laptop.mouse,
        teclado: laptop.teclado,
        color: laptop.color,
        precio: laptop.precio
    };
   
    var Listado = document.createElement("li");
    Listado.setAttribute("class", "list-group-item");
    Listado.innerText = JSON.stringify(HP);
    lista.appendChild(Listado);
    
 
    var Samsung = {
        marca: AparatosElectronicos.Marca1,
        pantalla: Celular.pantalla,
        color: Celular.color,
        peso: Celular.peso,
        tamañopantalla: Celular.tamañopantalla,
        precio: Celular.precio,
    };

    var Listado2 = document.createElement("li");
    Listado2.setAttribute("class", "list-group-item");
    Listado2.innerText = JSON.stringify(Samsung);
    lista.appendChild(Listado2);

    var LG = {
        marca: AparatosElectronicos.Marca3,
        precio: Television.precio,
        tamañopantalla: Television.tamañopantalla,
        peso: Television.peso,
        altura: Television.altura,
        ancho: Television.ancho,
    };

    var Listado3 = document.createElement("li");
    Listado3.setAttribute("class", "list-group-item");
    Listado3.innerText = JSON.stringify(LG);
    lista.appendChild(Listado3);

    var SmartWatch = {
        marca: AparatosElectronicos.Marca2,
        ancho: smartwatch.ancho,
        altura: smartwatch.altura,
        tamañopantalla: smartwatch.tamañopantalla,
        peso: smartwatch.peso,
    };

    var Listado4 = document.createElement("li");
    Listado4.setAttribute("class", "list-group-item");
    Listado4.innerText = JSON.stringify(SmartWatch);
    lista.appendChild(Listado4);
    
}

