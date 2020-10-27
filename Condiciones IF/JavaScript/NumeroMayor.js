function EventListener(){
    document.getElementById("Calcularnumeros").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

var num1 = Number(document.getElementById("Numero1").value);

var num2 = Number(document.getElementById("Numero2").value);

var num3 = Number(document.getElementById("Numero3").value);

var printresultado =  document.getElementById("Resultado");

if(num1 > num2 && num1 > num3){
    printresultado.innerText = num1 + " " + "Es el Numero Mayor"
}
if(num2 > num1 && num2 > num3){
    printresultado.innerText = num2 + " " +  "Es el Numero Mayor";
}
if(num3 > num1 && num3 > num2){
    printresultado.innerText = num3 + " " +  "Es el Numero Mayor";
}else{
    printresultado.innerText = "Ningun número se ha ingresado";
}
}