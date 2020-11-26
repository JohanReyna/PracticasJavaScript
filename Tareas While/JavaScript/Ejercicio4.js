function EventListener(){
    document.getElementById("Button").addEventListener("click", ButtonClick());
}

function ButtonClick(){
    var Print1 = document.getElementById("Alert1");

    var Print2 = document.getElementById("Alert2");

    var contador1 = 0, contador2 = 0, sumapares= 0, promedio1 = 0, sumaimpares = 0;

    var x = 1;
    while(x <=10){

        var num = Number(prompt("ingresa un número"));
        
        if(num > 0 && num % 2 == 0){
            
            contador1++;

            sumapares = num + sumapares;

            promedio1 = sumapares / contador1;
        }else{

            contador2++;

            sumaimpares = num + sumaimpares;

        }    
    x++
    }


    Print1.innerText = "El promedio es " + promedio1;

    Print2.innerText = "Suma de los números impares son: " + sumaimpares;
}

// Elabore un programa que pida al usuario 30 números enteros para que al final 
// presente la suma de los números impares y el promedio de los números pares. 