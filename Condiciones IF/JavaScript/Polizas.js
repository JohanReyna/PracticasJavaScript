function EventListener(){
    document.getElementById("Cargo").addEventListener("click", CalcularCargo());
}

function CalcularCargo(){

    var Seguro = document.getElementById("Seguro").value;

    var Alcohol = document.getElementById("alcohol").value;

    var Lentes = document.getElementById("lentes").value;

    var Enfermedad = document.getElementById("enfermedad").value;

    var Edad = document.getElementById("edad").value;

    var Inicial1 = 1200

    var Inicial2 = 950

    var preciofinal, Descuento1, Descuento2, Descuento3, Descuento4, Descuento5, Descuento6 = 0

    var PrintResultado = document.getElementById("ImprimirCargo");

    if(Seguro == "1" && Alcohol == "3" && Lentes == "5" && Enfermedad == "7" && Edad == "9"){
        Descuento1 = (Inicial1) * .40;
        preciofinal = Inicial1 + Descuento1;
    }
    
    if(Seguro == "1" && Alcohol == "4" && Lentes == "5" && Enfermedad == "7" && Edad == "9"){
        Descuento2 = (Inicial1) * .30;
        preciofinal = Inicial1 + Descuento2;
    }
      
    if(Seguro == "1" && Alcohol == "4" && Lentes == "6" && Enfermedad == "7" && Edad == "9"){
        Descuento3 = (Inicial1) * .25;
        preciofinal = Inicial1 + Descuento3;
    }
              
    if(Seguro == "1" && Alcohol == "4" && Lentes == "6" && Enfermedad == "8" && Edad == "9"){
        Descuento4 = Inicial1 * .20;
        preciofinal = Inicial1 + Descuento4;
    }
        
    if(Seguro == "1" && Alcohol == "3" && Lentes == "6" && Enfermedad == "7" && Edad == "9"){
        Descuento5 = (Inicial1) * .35;
        preciofinal = Inicial1 + Descuento5;
    }
    
    if(Seguro == "1" && Alcohol == "3" && Lentes == "5" && Enfermedad == "8" && Edad == "9"){
        Descuento5 = (Inicial1) * .35;
        preciofinal = Inicial1 + Descuento5;
    }
      
    if(Seguro == "1" && Alcohol == "3" && Lentes == "6" && Enfermedad == "8" && Edad == "9"){
        Descuento2 = (Inicial1) * .30;
        preciofinal = Inicial1 + Descuento2;
    }
              
    if(Seguro == "1" && Alcohol == "4" && Lentes == "5" && Enfermedad == "8" && Edad == "9"){
        Descuento3 = (Inicial1) * .25;
        preciofinal = Inicial1 + Descuento3;
    }
//--------------------------------------------------------------------------------------------------------
        
    if(Seguro == "1" && Alcohol == "3" && Lentes == "5" && Enfermedad == "7" && Edad == "10"){
        Descuento1 = (Inicial1) * .30;
        preciofinal = Inicial1 + Descuento1;
    }
    
    if(Seguro == "1" && Alcohol == "4" && Lentes == "5" && Enfermedad == "7" && Edad == "10"){
        Descuento2 = (Inicial1) * .20;
        preciofinal = Inicial1 + Descuento2;
    }
      
    if(Seguro == "1" && Alcohol == "4" && Lentes == "6" && Enfermedad == "7" && Edad == "10"){
        Descuento3 = (Inicial1) * .15;
        preciofinal = Inicial1 + Descuento3;
    }
              
    if(Seguro == "1" && Alcohol == "4" && Lentes == "6" && Enfermedad == "8" && Edad == "10"){
        Descuento4 = Inicial1 * .10
        preciofinal = Inicial1 + Descuento4;
    }
        
    if(Seguro == "1" && Alcohol == "3" && Lentes == "6" && Enfermedad == "7" && Edad == "10"){
        Descuento5 = (Inicial1) * .25;
        preciofinal = Inicial1 + Descuento5;
    }
    
    if(Seguro == "1" && Alcohol == "3" && Lentes == "5" && Enfermedad == "8" && Edad == "10"){
        Descuento5 = (Inicial1) * .25;
        preciofinal = Inicial1 + Descuento5;
    }
      
    if(Seguro == "1" && Alcohol == "3" && Lentes == "6" && Enfermedad == "8" && Edad == "10"){
        Descuento2 = (Inicial1) * .20;
        preciofinal = Inicial1 + Descuento2;
    }
              
    if(Seguro == "1" && Alcohol == "4" && Lentes == "5" && Enfermedad == "8" && Edad == "10"){
        Descuento3 = (Inicial1) * .15;
        preciofinal = Inicial1 + Descuento3;
    }
        

//--------------------------------------------------------------------------------------------------------


if(Seguro == "2" && Alcohol == "3" && Lentes == "5" && Enfermedad == "7" && Edad == "9"){
    Descuento1 = (Inicial2) * .40;
    preciofinal = Inicial2 + Descuento1;
}

if(Seguro == "2" && Alcohol == "4" && Lentes == "5" && Enfermedad == "7" && Edad == "9"){
    Descuento2 = (Inicial2) * .30;
    preciofinal = Inicial2 + Descuento2;
}
  
if(Seguro == "2" && Alcohol == "4" && Lentes == "6" && Enfermedad == "7" && Edad == "9"){
    Descuento3 = (Inicial2) * .25;
    preciofinal = Inicial2 + Descuento3;
}
          
if(Seguro == "2" && Alcohol == "4" && Lentes == "6" && Enfermedad == "8" && Edad == "9"){
    Descuento4 = Inicial2 * .20;
    preciofinal = Inicial2 + Descuento4;
}
    
if(Seguro == "2" && Alcohol == "3" && Lentes == "6" && Enfermedad == "7" && Edad == "9"){
    Descuento5 = (Inicial2) * .35;
    preciofinal = Inicial2 + Descuento5;
}

if(Seguro == "2" && Alcohol == "3" && Lentes == "5" && Enfermedad == "8" && Edad == "9"){
    Descuento5 = (Inicial2) * .35;
    preciofinal = Inicial2 + Descuento5;
}
  
if(Seguro == "2" && Alcohol == "3" && Lentes == "6" && Enfermedad == "8" && Edad == "9"){
    Descuento2 = (Inicial2) * .30;
    preciofinal = Inicial2 + Descuento2;
}
          
if(Seguro == "2" && Alcohol == "4" && Lentes == "5" && Enfermedad == "8" && Edad == "9"){
    Descuento3 = (Inicial2) * .25;
    preciofinal = Inicial2 + Descuento3;
}
    

//-------------------------------------------------------------------------------------------------------


if(Seguro == "2" && Alcohol == "3" && Lentes == "5" && Enfermedad == "7" && Edad == "10"){
    Descuento1 = (Inicial2) * .30;
    preciofinal = Inicial2 + Descuento1;
}

if(Seguro == "2" && Alcohol == "4" && Lentes == "5" && Enfermedad == "7" && Edad == "10"){
    Descuento2 = (Inicial2) * .20;
    preciofinal = Inicial2 + Descuento2;
}
  
if(Seguro == "2" && Alcohol == "4" && Lentes == "6" && Enfermedad == "7" && Edad == "10"){
    Descuento3 = (Inicial2) * .15;
    preciofinal = Inicial2 + Descuento3;
}
          
if(Seguro == "2" && Alcohol == "4" && Lentes == "6" && Enfermedad == "8" && Edad == "10"){
    Descuento4 = Inicial2 * .10;
    preciofinal = Inicial2 + Descuento4;
}
    
if(Seguro == "2" && Alcohol == "3" && Lentes == "6" && Enfermedad == "7" && Edad == "10"){
    Descuento5 = (Inicial2) * .25;
    preciofinal = Inicial2 + Descuento5;
}

if(Seguro == "2" && Alcohol == "3" && Lentes == "5" && Enfermedad == "8" && Edad == "10"){
    Descuento5 = (Inicial2) * .25;
    preciofinal = Inicial2 + Descuento5;
}
  
if(Seguro == "2" && Alcohol == "3" && Lentes == "6" && Enfermedad == "8" && Edad == "10"){
    Descuento2 = (Inicial2) * .20;
    preciofinal = Inicial2 + Descuento2;
}
          
if(Seguro == "2" && Alcohol == "4" && Lentes == "5" && Enfermedad == "8" && Edad == "10"){
    Descuento3 = (Inicial2) * .15;
    preciofinal = Inicial2 + Descuento3;
}

PrintResultado.innerText = "El costo final de tu seguro es " + preciofinal;    
}