// imprime -------------------------------------------------------------------------1
alert("hola javascript")

// tipos de datos ------------------------------------------------------------------2
texto = "cadena de texto"
numero = 1
Boolean = true

otrnumero=10.33

alert(texto)
alert(numero)
alert(Boolean)

alert(typeof otrnumero) // typeof nos muestra el tipo de dato de x variable

//declarar variables ---------------------------------------------------------------3

var texto1 = "var sirve para navegadores antiguos";
let texto2= "let sirve si crees que el valor de la variable puede cambiar";
const texto3= "const sirve si la varible va hacer constante";

document.write("<p>"+texto1+"</p>")
document.write("<p>"+texto2+"</p>")
document.write("<p>"+texto3+"</p>")

// prompt --------------------------------------------------------------------------4
// prompt nos permite pedir o digitar datos desde el html y enviarlos al archivo.js 
nombre = prompt("ingresa tu nombre") 

alert("hola "+nombre)

// operadores aritmeticos ----------------------------------------------------------5
numero1=4;
numero2=2,

suma=numero1+numero2;
resta=numero1-numero2;
mult=numero1*numero2;
div=numero1/numero2;
exp=numero1**numero2;
modu=numero1%numero2; //residuo de la divicion

document.write("suma: "+suma+" resta: "+resta+" multiplicacion: "+mult+" divicion: "+div+" exponenciación: "+exp+" module: "+modu)

//concatenar -------------------------------------------------------------------------6

numero = 10;
jugador= " Pele";

document.write("<p>"+numero+jugador+"</p>");// primera forma

conc = numero+jugador;// segunda forma
document.write("<p>"+conc+"</p>"); 

jugador = ` ${numero} Pele`; // tercera forma con backticks ``= (acentos graves)
document.write(jugador);

//operadores logicos -----------------------------------------------------------------7

let valor = true;
let valor2 = false;

let andd = valor && valor2; // si las dos se cumplen
let orr  = valor || valor2; // si unada de las dos se cumple
let nott = !valor2; // cambieme el valor a su contrario

document.write("<br>");

document.write("<br>"); // salto de linea
document.write(andd);
document.write("<br>"); // salto de linea
document.write(orr);
document.write("<br>"); // salto de linea
document.write(nott);

document.write("<br>");

//condicionales -----------------------------------------------------------------------8
//determine cual es el numero mayor de tres numeros
let n1=3,n2=6,n3=9;

if (n1 > n2 && n1 >n3) {
    document.write("el numero mayor es n1: "+n1)
}else if( n2 > n3){
    document.write("el numero mayor es n2: "+n2)
}else{
    document.write(" <br> el numero mayor es n3: "+n3) 
}

document.write("<br></br>");

//Arrays ------------------------------------------------------------------------------9


 let frutas = ["banana","manzana","pera","fresa"];

document.write(frutas);
document.write("<br>");
document.write(frutas[2]);

document.write("<br>");

//diccionarios ------------------------------------------------------------------------10
// los diccionarios en javascript son mas estrictos a la hora de imprimir que en python.
// solo imprime si se le da la key.
let colores = {"azul":"blue","rojo":"red","amarillo":"yellow","verde":"green"}

document.write("<br>");
document.write(colores["verde"]); // primera forma 
document.write("<br>");
document.write(colores.azul); // segunda forma

document.write("<br>");






















