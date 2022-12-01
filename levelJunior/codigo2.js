document.write("hola segundo arcihvo.js")
document.write("<br>");

//ciclo while ------------------------------------------------------------------1
let numero = 0;

document.write("<br>");

while (numero < 10){
    
    document.write(numero);
    numero++;
}

// ciclo for --------------------------------------------------------------------2
document.write("<br>");

for(let i =0;i<=10;i++){
    document.write(i+" ");
}

document.write("<br>");

for(let i =10;i>=0;i--){
    document.write(i+ " ");
}

document.write("<br>");

//ciclo for in y of --------------------------------------------------------------3
// nos sirve para recorrer y imprimir arrays
document.write("<br>");

let animales = ["perro","gato","pollo","leon"]

for(x in animales){ // muestra la key o posicion
    document.write(x+" ");
}

document.write("<br>");

for(x of animales){ // muestra el valor de la key
    document.write(x+" ");
}
document.write("<br>");
//funciones -----------------------------------------------------------------------4
function saludar (){
    document.write(" <br> mi primera funcion ")
    let variable= 5 + 10;
    document.write(`<br> el resultado de 5+10 es: ${variable}`) 
}
saludar();

//funciones con parametros ---------------------------------------------------------5
document.write("<br></br>");

function sumarDosN (n1,n2){ // parametros declarados
    let suma = n1+n2; 
    document.write(suma);
}
sumarDosN(4,5); // paramentros agregados

//funciones con paramentos por defecto --------------------------------------------6
document.write("<br></br>");

function sumarDosND (n1=1,n2=2){ 
    let suma = n1+n2; 
    document.write(suma);
}
sumarDosND(); // paramentros por defecto
document.write("<br>");
sumarDosND(10,9); // paramentros agregados
document.write("<br>");
sumarDosND(10,); //paramentro con solo un
document.write("<br>");

//funcion con return ---------------------------------------------------------------7
// retorneme el valor asignado  
document.write("<br></br>");

function llamar (){
    return 5;
}
let recuperar =document.write(llamar()); // imprima el retun

//funcion de flecha ----------------------------------------------------------------8
// forma mas resumida a la hora de hacer funciones
document.write("<br></br>");

const despedir = (nombre)=>{
    document.write("hasta luego "+nombre)
}
despedir("david");

// funcion de flecha ---------------------------------------------------------------9
document.write("<br></br>");

const agenda = (recordar,ATS="ATS")=>{document.write(" recuerda que si lo puedes imaginar "+ recordar+ATS)}

agenda("lo puedes programar");

// for each ------------------------------------------------------------------------10
document.write("<br></br>");

let nRomanos = ["I","II","III","IV","V"];

nRomanos.forEach(nR); // primero asignamos un array al foreach

function nR (value,index,array){ // segundo creamos una funcion para el ciclo
    document.write("["+index+"]"+value+"<br>");

}













