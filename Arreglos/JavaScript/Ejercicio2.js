function MetodosdeArreglo(){

    var ArregloNumeros = [20,3,4,6,8,5,0,4];
    var Arreglo2 = [1,3,11,4,33,111,2,444,5,6];
    var Arreglo3 = ["hoja", "papel", "Sapo", "Pelusa"]

    console.log(ArregloNumeros[5]);

    console.log(ArregloNumeros);

    console.log(ArregloNumeros.push(10));

    //Slice() = Te imprime el arreglo completo

    console.log(ArregloNumeros.slice());

    console.log(ArregloNumeros.unshift(15));

    console.log(ArregloNumeros.slice());

    //METODO SORT = Sirve para acomodar alfabeticamente, los 1, los 2, los 3, etc, etc

    //Imprimir todos los valores del arreglo
    console.log(Arreglo2);

    console.log(Arreglo2.sort());
 
    //Ejemplo 2 con palabras
    console.log(Arreglo3);

    console.log(Arreglo3.sort());


}