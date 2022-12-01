// el DOM
// id --------------------------------------------------------------------------1
//con id
document.write("<br>");
variable =document.getElementById("parrafo");

document.write("objeto de hola DOM:"+variable);

//TagName ----------------------------------------------------------------------2
document.write("<br>");
variable =document.getElementsByTagName("p");

document.write("objeto de hola DOM:"+variable);
//querySelector ----------------------------------------------------------------3
//con class
document.write("<br>");
variable3 =document.querySelector(".parrafo2");

document.write("objeto de hola DOM2:"+variable3);

//acceder a los atributos con metodos ------------------------------------------4
const tituloo = document.querySelector(".tituloo");

tituloo.setAttribute("contentEditable","true")

//acceder a los atributos directamente -----------------------------------------5
document.write("<br>");
const  input = document.querySelector(".input-normal");

document.write("la clase del input:"+input.className); 

document.write("<br>");
const  input2 = document.querySelector(".input-normal2");

document.writeln("la clase del input2:"+input2.className); // mostramos el valor del atributo
document.writeln("el valor del input2:"+input2.value); 

input2.type = "number"; // modificamos el valor del atributo // directamente 
input2.setAttribute("value","456"); // modificamos el valor del atributo // con metodo

//classList --------------------------------------------------------------------6
const tituloo2 = document.querySelector(".tituloo2");

tituloo2.classList.add("grande");// agrega un valor a la clase
let valor = tituloo2.classList.item(1); // muestra el valor de la clase segun la posicion indicada

document.write("<br>");
document.write("la clase de tituloo2 posicion: "+valor);

//creacion de elementos --------------------------------------------------------7
//un nodo dentro de otro nodo
document.write("<br>");
const contenedor = document.querySelector(".contenedor"); //clase // nodo1

const item = document.createElement("LI");// elemento <li> //nodo2

const textDelItem =document.createTextNode("texto en el item"); // lo que va ir dentro de <li></li>

//item.innerHTML = textDelItem; // agregamos el objeto textDelItem al elemento // "[object Text]"
item.appendChild(textDelItem); //agregamos el objeto textDelItem al elemento // "texto en item"
contenedor.appendChild(item);

console.log(item); // miramos por consola.
//getElementById and innerHTML --------------------------------------------------8
//con un button desde el HTML
//arcihvo index2.html linea 16

//escribir condigo javascript desde el html --------------------------------------9
//nos sirve a la hora de mostrar los elementos debajo de la clase y no al final de todas la clases
//arcihvo index2.html linea 17

// idenx2.html pic_bulbon.gif ----------------------------------------------------10
// prende la bombilla :)
//linea 35






















