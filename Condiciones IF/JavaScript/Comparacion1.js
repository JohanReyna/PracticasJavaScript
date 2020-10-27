//QUIERE COMPARAR SI UNA PERSONA ES  MAYOR DE EDAD Y SI TIENE LA INE Y YA PUEDE TOMAR O NO.

//ES UN METODO QUE SE AGREGA PARA UTILIZAR UNA FUNCION PARA EL BOTON Y SE PUEDA EJECUTAR
// EventListener();

function EventListener(){
    //OBTIENE EL ID DEL BOTON QUE ESTA EN EL HTML Y VA A ESTAR ATENTO CUANDO LE DE CLICK AL BOTON
    document.getElementById("calcularedad").addEventListener("click", CalcularEdad());
}

function CalcularEdad()
{
    //OBTENER EL ID DEL INPUT, PERO CON EL .VALUE OBTENEMOS LO QUE INGRESAMOS EN EL INPUT.
    var edad = Number(document.getElementById("edad").value);
    //SE DECLARA 1 PARA INDICAR QUE TIENE INE Y 0 PARA INDICAR QUE NO TIENE
    var ine = Number(document.getElementById("INE").value);
    //SE DECLARA VARIABLE PARA IMPRIMIR EL MENSAJE
    var imprimirmensaje = document.getElementById("ImprimirResultado");
    
    if( edad >= 18 && ine > 0 ){
        //InnerText SE UTILIZA PARA IMPRIMIR LA INFORMACION EN EL NAVEGADOR
        imprimirmensaje.innerText = "La persona es mayor de edad y puede tomar"
    }else{(edad<18 && ine == 0)
        imprimirmensaje.innerText = "La persona no es mayor de edad y no puede tomar"
    }
    
}