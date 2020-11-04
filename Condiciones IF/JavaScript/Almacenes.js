function EventListener(){
    document.getElementById("Calculeprecio").addEventListener("click", CalcularPrecio());
}

function CalcularPrecio(){
    
    var Precio = Number(document.getElementById("precio").value);

    var PrintPrecio = document.getElementById("preciofinal");

    var PrintDescuento = document.getElementById("Descuento");

    var Descuento16 = Precio * 0.16;
    
    var Descuento7 = Precio * 0.07;

    if (Precio >= 3600){
    PrintPrecio.innerText = "Precio Total: " + (Precio - Descuento16);
    PrintDescuento.innerText = "Descuento del 16% aplicado: " + Descuento16; 
    }
    else{ (Precio <= 3599)
        PrintPrecio.innerText = "Precio Total: " + (Precio - Descuento7);
        PrintDescuento.innerText = "Descuento del 7% aplicado: " + Descuento7;
    }
}