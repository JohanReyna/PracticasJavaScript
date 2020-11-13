function EventListener(){
    document.getElementById("Boton").getElementById("click", Hacercalculo());
}

function Hacercalculo(){

          var num1 = Number(document.getElementById("PrimerN").value);

          var num2 = Number(document.getElementById("SegundoN").value);

          var PrintResultado1 = document.getElementById("resultado1");

          if(num1 % num2 == 0){
              PrintResultado1.innerText = "El primer número es multiplo del Segundo";
          }else{
            PrintResultado1.innerText = "El primer número no es multiplo del Segundo Número";
          }
}