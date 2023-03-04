// //alert("Hola soy Paula");
// console.log("Hola soy Paula");
// //Declaracion de variables 
// var num=20;//entero
// var dec=10.6;//Decimales 
// var car="paula";//String 
// var boo=true;//boolean 
// //camelCase snake_case PascallCase

// //operadores basicos 
// var numuno  =20;
// var numdos  =40;
// var resta   =numdos-numuno;
// var suma    =numuno+numdos;
// var divi    =numuno/numdos;
// var multi   =numuno*numdos;
// var mod     =numuno%numdos;

// console.log("La suma es:"+suma);
// console.log("La resta es:"+resta);
// console.log("La division es:"+divi);
// console.log("La multiplicacion es:"+multi);
// console.log("El modulo es:"+mod);

// console.log(suma + "\n" + resta + "\n" + divi + "\n" +multi + "\n" +mod);//salto de linea 

// var nota_uno =4.2;
// var nota_dos=3.5;
// var nota_tres=4.5;
// var examen_final=5.0;
// var setenta,treinta,notafinal;

// setenta=((nota_uno+nota_dos+nota_tres)/3)*0.70;
// treinta=examen_final*0.3;
// notafinal=setenta+treinta;
// console.log(notafinal);

// var array   =   ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
// var string  =   "MI NOMBRE ES PAULA";

// console.log(array.length + "---" + string.length);

// //operadores de comparacion 
// //< > <= >= <> ==

// // Operadores Logicos 
// // AND=&& OR=
// for (var i=0; i<array.length;i++){
//     console.log(array[i]);
// }
// valor=0;
// while(valor<array.length){
//     console.log(array[valor]);
//     valor++;
// }
// var valor   =   0;
// do{
//     console.log(array[valor]);
//     valor++;
//     if (array[valor]=="Viernes"){
//         console.log("el mejor dia es el viernes")
//         break;
//     }
//         else{
//          console.log("Valor no encontrado");
//         }
    
    
// }while(valor<array.length)
//control a y cierre de corchete

//EJERCICIO NOTA DEFINITIVA
function enviar(){
    var notaUno=$("#notaUno").val();
    var notaDos=$("#notaDos").val();
    var notaTres=$("#notaTres").val();
    var notaEx=$("#notaEx").val();

    var calculo=(((notaUno+notaDos+notaTres)/3)*0.7)+(notaEx*0.3);
}








