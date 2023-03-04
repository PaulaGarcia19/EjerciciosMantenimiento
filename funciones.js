//LLAMAR FUNCIONES 

//fUNCIONES 
//function enviar(){
   // console.log("SOY UNA FUNCION"); }
//function calcular (a,b){
    //console.log("El nombre es:" +a);}
//calcular("Paula",19);
function calcular (a,b){
    console.log(a*b);
}
function limpiar(){
   // $("#texto").val("");
    //calcular(2,3);
    //calcula_precio(8000);
    EjemploPropiedades();
}
function calcula_precio(precio){
    var impuestos   =  1.16;
    var envio       =  10000;
    var precio_total=   (precio*impuestos)+envio;
    console.log(precio_total);
   
}

function EjemploPropiedades(){
    var texto=   "Hola soy una cadena de texto";
    console.log(texto.length);//cantidad de caracteres
    console.log(texto.concat(" js"));
    console.log(texto.toUpperCase());//covertir a mayusculas 
    console.log(texto.toLowerCase());//convertir a minusculas
    console.log(texto.charAt(7));
    console.log(texto.indexOf("a"));//posicion desde el inicio
    console.log(texto.lastIndexOf("a"));//posicion desde el final
    console.log(texto.substring(8));
    console.log(texto.substring(13, 19));
    var nuevo_array=texto.split(" ");//convertir en array
    console.log(nuevo_array);
    var texto_new=nuevo_array.join("/");//separa segun el caracter
    console.log(texto_new);
    var array=nuevo_array.pop();
    console.log(array);
    console.log(nuevo_array);
    nuevo_array.push("PAULA GARCIA");
    console.log(nuevo_array);
}