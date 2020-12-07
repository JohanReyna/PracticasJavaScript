function LocalStorage(){
    //Guardar informcacion en el  localstorage
    //setitem se encarga 
    localStorage.setItem("Nombre", "Johan Reyna");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);

    var Ropa = {
        calzado: "tenis",
        calzado2: "pantuflas",
        calzado3: "chanclas",
        jens: "pantalon Mezclilla",
    }

    localStorage.setItem("Objeto", JSON.stringify(Ropa));

    //(getItem)Imprimo en consola  la clave que yo tengo en el localstorage
    console.log(localStorage.getItem("Nombre")); 

    //removeItem
    localStorage.removeItem("booleano");

    //clear
    //Limpiar la informacion que esta en el localstorage
    localStorage.clear();

    usuario = {
        nombre: "Johan",
        edad: 19,
    }
    //JSON.stringify es un formato de javascript para guardar objetos en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));
    //JSON.parse  es otro formato de javascript para obtener el objeto en el navegador o consola
    console.log(JSON.parse(localStorage.getItem("usuario")));
}