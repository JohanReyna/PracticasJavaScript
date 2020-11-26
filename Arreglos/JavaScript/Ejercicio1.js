//Se va a crear un arreglo con los 7 dias de las semana

function FunArrays(){
    
    var DiasSemana = new Array(7); //se crea un cuadro con 7 posiciones o 7 días de la semana

    //Declarar la informacion que va estar en cada cuadro
    DiasSemana[0] = "Lunes";
    DiasSemana[1] = "Martes";
    DiasSemana[2] = "Miercoles";
    DiasSemana[3] = "Jueves";
    DiasSemana[4] = "Viernes";
    DiasSemana[5] = "Sabado";
    DiasSemana[6] = "Domingo";

    //Imprimir el arreglo completo
    console.log(DiasSemana);

    //Imprimir un dia de la semana con su indice
    console.log(DiasSemana[4]);

    //Se manda a imprimir los dias de la semana
    console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], DiasSemana[3], DiasSemana[4], DiasSemana[5], DiasSemana[6],);


    //Manera de realizarlo de manera abreviada 
    var Semanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    //Imprimir todos los dias de la semana con su indice
    console.log(Semanas[0], Semanas[1], Semanas[2], Semanas[3], Semanas[4], Semanas[5], Semanas[6],);
    //Imprimir el arreglo completo
    console.log(Semanas);
    //Imprimir un dia de la semana con su indice
    console.log(Semanas[4]);

}