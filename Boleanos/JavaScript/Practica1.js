function EjemploVariable(){
    //Declaracion de variables, es necesario declarar todas las variables para ejecutar mi aplicacion
    // var mayorde25 = false;
    // //var mayorde25 = Boolean(false); (Esta es otra forma de crear una variable tipo boolean)
    // mayorde25 = otravarible;
    // alert("Mostrar un mensaje no se ejecuta");
    // //Nos debe mostrar un error debido a que no definimos la varible "otravariable"

//     var foco = false; // 0 true == 1
//     // 0 == 1
//     if(foco == true){
//         alert("El foco esta encendido");
//     }else{
//         alert("El foco esta apagado");
//     }

//     var foco1 = false
//     // el signo ! es un operador logico que se utiliza para negar la informacion que tiene la varible.
//     // practicamente utilizar el operador ! es como si en matematicas usamos este signo ~ 
//     if(!foco1 == true){
//         alert("El foco esta encendido");
//     }else{
//         alert("El foco esta apagado");
//     }

    var a = 1; b = 2; c = 3;
    var casado = true;
    var mayorde25 = false;
    var texto1 = "En un lugar de la marcha"

    //Estamos imprimiendo el valor de la variable casado
    console.log("La variable casado vale " + casado);
    //Estamos imprimiendo el valor de la varible mayorde25
    console.log("La varible mayorde25 vale " + mayorde25);
    //Si multiplicamos la variable de tipo boleano true por un numero automaticamente la variable true se convierte en 1 y se haria 1 * X = 
    console.log("La variable casado si lo forzamos a que sea numerico vale " + casado * 5);

    //Si multiplicamos la variable de tipo boleano false por un numero automaticamente la variable false se convierte en 0 y se haria 0 * X = 
    console.log("La variable mayorde25, si lo multiplicamos por 5 vale " + mayorde25 * 5);

    console.log("La varible casado ahora vale " + casado);

    console.log("La varible mayorde25 ahora vale " + mayorde25);
    //Sumar las variables, a+b+c, el resultado es 6
    console.log("La suma de los numeros es: " + (a + b + c));
    //Multiplicar frases con numeros imprime un NaN, que significa que no es un numero
    console.log("Que obtenemos al multiplicar un texto con un numero: " + (texto1 * 1));

    //toString - Cualquier tipo de variable escribe el resultado como texto
    //Un booleano con un string imprime  un true como texto
    console.log("Mostramos lo equivalente en string " + casado.toString());
    console.log(texto1.toString());

    //Imprimir el numero como si fuera texto  y si suto a.toString + b.toString, solo junta los numeros osea ab = 12 por que a=1 y b=2
    var arreglo = ["Quiero", "Aprender"];
    console.log(arreglo.toString());

    console.log(a.toString() + b.toString());
    console.log(b.toString() + c.toString());
    console.log(c.toString() + a.toString());

    //Suma a + b
    console.log(a + b);
}