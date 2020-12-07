function Personabutton1(){

    var persona = {
        Nombre: "Johan",
        Apellido: "Reyna",
        Edad: 19,
        Genero: "Maculino",
        Nacionalidad: "Mexicano",
    }

    localStorage.setItem("Nombre", persona.Nombre);
    localStorage.setItem("Apellido", persona.Apellido);
    localStorage.setItem("Edad", persona.Edad);
    localStorage.setItem("Genero", persona.Genero);
    localStorage.setItem("Nacionalidad", persona.Nacionalidad);

}

function Personabutton2(){

    var persona = {
        Nombre: "Johan",
        Apellido: "Reyna",
        Edad: 19,
        Genero: "Maculino",
        Nacionalidad: "Mexicano",
    }

    var Info1 = document.getElementById("Info1");
    var Info2 = document.getElementById("Info2");
    var Info3 = document.getElementById("Info3");
    var Info4 = document.getElementById("Info4");
    var Info5 = document.getElementById("Info5");

    Info1.innerText = "Nombre: " + persona.Nombre;
    Info2.innerText = "Apellido: " + persona.Apellido;
    Info3.innerText = "Edad: " + persona.Edad;
    Info4.innerText = "Genero: " + persona.Genero;
    Info5.innerText = "Nacionalidad: " + persona.Nacionalidad;

}

//-----------------------------------------------------------------------------

function Comidabutton1(){

    var comida = {
        Mexicana: "Menudo",
        España: "Tortilla de patatas",
        Fancesa: "Aligot",
        Italiana: "Pizza Napoleteana",
        Estadounidense: "Hamburguesas"
    }  

    localStorage.setItem("Comida Mexicana", comida.Mexicana);
    localStorage.setItem("Comida Española", comida.España);
    localStorage.setItem("Comida Francesa", comida.Fancesa);
    localStorage.setItem("Comida Italiana", comida.Italiana);
    localStorage.setItem("Comida Estadounidense", comida.Estadounidense);

}

function Comidabutton2(){

    var comida = {
        Mexicana: "Menudo",
        España: "Tortilla de patatas",
        Fancesa: "Aligot",
        Italiana: "Pizza Napoleteana",
        Estadounidense: "Hamburguesas"
    }  

    var Info6 = document.getElementById("Info6");
    var Info7 = document.getElementById("Info7");
    var Info8 = document.getElementById("Info8");
    var Info9 = document.getElementById("Info9");
    var Info10 = document.getElementById("Info10");

    Info6.innerText = "Comida Mexicana: " + comida.Mexicana;
    Info7.innerText = "Comida Española: " + comida.España;
    Info8.innerText = "Comida Francesa: " + comida.Fancesa;
    Info9.innerText = "Comida Italiana: " + comida.Italiana;
    Info10.innerText = "Comida Estadounidense: " + comida.Estadounidense;

}

//-----------------------------------------------------------------------------

function Peliculasbutton1(){

    var Peliculas = {
        Terror: "La maldición (The Grudge)",
        Comedia: "Las vacaciones de Mr Bean",
        Ficción: "Sonic Hedgehog",
        Romanticas:	"Titanic",
    }

    localStorage.setItem("Peliculas de Terror", Peliculas.Terror);
    localStorage.setItem("Peliculas de Comedia", Peliculas.Comedia);
    localStorage.setItem("Peliculas de Ficcion", Peliculas.Ficción);
    localStorage.setItem("Peliculas Romanticas", Peliculas.Romanticas);

}


function Peliculasbutton2(){

    var Peliculas = {
        Terror: "La maldición (The Grudge)",
        Comedia: "Las vacaciones de Mr Bean",
        Ficción: "Sonic Hedgehog",
        Romanticas:	"Titanic",
    }

    var Info11 = document.getElementById("Info11");
    var Info12 = document.getElementById("Info12");
    var Info13 = document.getElementById("Info13");
    var Info14 = document.getElementById("Info14");

    Info11.innerText = "peliculas de Terror: " + Peliculas.Terror;
    Info12.innerText = "Peliculas de Comedia: " + Peliculas.Comedia;
    Info13.innerText = "Peliculas de Ficción: " + Peliculas.Ficción; 
    Info14.innerText = "Peliculas Romanticas: " + Peliculas.Romanticas;
}

//-----------------------------------------------------------------------------

function Musicabutton1(){

    var Musica = {
        Rock:"Guns N' Roses - Sweet Child O' Mine",
        Pop: "Alan Walker - Sing Me",
        HipHop: "Snoop Dogg - Still D.R.E.",
        Reggaeton: "Luis Fonsi - Despasito",
    }

    localStorage.setItem("Musica Rock", Musica.Rock);
    localStorage.setItem("Musica Pop", Musica.Pop);
    localStorage.setItem("Musica de HipHop", Musica.HipHop);
    localStorage.setItem("Musica de Reggaeton", Musica.Reggaeton);

}

function Musicabutton2(){

    var Musica = {
        Rock:"Guns N' Roses - Sweet Child O' Mine",
        Pop: "Alan Walker - Sing Me",
        HipHop: "Snoop Dogg - Still D.R.E.",
        Reggaeton: "Luis Fonsi - Despasito",
    }

    var Info15 = document.getElementById("Info15");
    var Info16 = document.getElementById("Info16");
    var Info17 = document.getElementById("Info17");
    var Info18 = document.getElementById("Info18");

    Info15.innerText = "Musica Rock: " + Musica.Rock;
    Info16.innerText = "Musica Pop: " + Musica.Pop;
    Info17.innerText = "Musica de HipHop: " + Musica.HipHop;
    Info18.innerText = "Musica de Reggaeton: " + Musica.Reggaeton;
}

//-----------------------------------------------------------------------------
