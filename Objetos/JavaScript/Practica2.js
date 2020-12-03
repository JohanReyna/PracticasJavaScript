function Objetos(){
    //se crea un objeto, con sus cuatro propiedades.

    var coche1 = {
        ruedas:4,
        puertas:4,
        color:"verde",
        anio:2010,
        luces: 4,
        espejos: 2,
    }; //indica que termina una instruccion y podemos agregar otra instruccion aparte

    var coche2 = {
        ruedas:4,
        puertas:2,
        color:"rojo",
        anio:2015,
        luces: 4,
        espejos: 2,
    };

    //se crea un objeto con el nombre del objeto
    var coche3 = {
        //la informacion que esta dentro 
        ruedas:4,
        puertas:4,
        color:"azul",
        anio:2020,
        luces: 4,
        espejos: 2,
    };

    var coche4 = {
        ruedas:4,
        puertas:2,
        color:"negro",
        anio:2018,
        luces: 4,
        espejos: 2,
    };

    // Se crea otro objeto llamado fabricante con sus cuatro marcas
    var fabricantes = {
        marca1: "Ford",
        marca2: "Nissan",
        marca3: "Fiat",
        marca4: "Chevrolet",
    }

    // se crea un objeto llamado Ford, donde vamos a llamar las propiedades del coche
    // cuando se tiene dos o mas objetos, se crea otro objeto aparte para mandar llamar la informacion de los dos objetos
    var ford = {
        ruedas: coche1.ruedas,
        puertas: coche1.puertas,
        color: coche1.color,
        anio: coche1.anio,
        luces: coche1.luces,
        espejos: coche1.espejos,
        marca1: fabricantes.marca1
    }
    console.log(ford);
    console.log(ford.color);
    console.log(ford.puertas);

    var Nissan = {
        ruedas: coche2.ruedas,
        puertas: coche2.puertas,
        color: coche2.color,
        anio: coche2.anio,
        luces: coche2.luces,
        espejos: coche2.espejos,
        marca2: fabricantes.marca2
    }
    
    console.log(Nissan);
    console.log(Nissan.puertas);
    console.log(Nissan.luces);
    
    var Fiat = {
        ruedas: coche3.ruedas,
        puertas: coche3.puertas,
        color: coche3.color,
        anio: coche3.anio,
        luces: coche3.luces,
        espejos: coche3.espejos,
        marca3: fabricantes.marca3
    }
    
    console.log(Fiat);
    console.log(Fiat.ruedas);
    console.log(Fiat.espejos);
    
    var Chevrolet = {
        ruedas: coche4.ruedas,
        puertas: coche4.puertas,
        color: coche4.color,
        anio: coche4.anio,
        luces: coche4.luces,
        espejos: coche4.espejos,
        marca4: fabricantes.marca4
    }
    
    console.log(Chevrolet);
    console.log(Chevrolet.anio);
    console.log(Chevrolet.puertas);
}