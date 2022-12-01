// class orientada a objetos ---------------------------------------------------------1
class campeones { // clase
    constructor(nombre,rol,linea){ //objeto
        this.nombre = nombre;  // atributos
        this.rol = rol;
        this.linea = linea;
        this.info = `nombre: ${this.nombre} <br>
                     rol: ${this.rol} <br>
                     linea: ${this.linea} <br>`;
    }
}

let variable = new campeones("yasuo","luchador","mid");
let variable2 = new campeones("garen","tanque","top");

document.write(variable.info);
document.write("<br>");
document.write(variable2.info);

//class con funciones ----------------------------------------------------------------2
document.write("<br>");

class animales {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `especie: ${this.especie} <br>
                     edad: ${this.edad} <br>
                     color: ${this.color} <br>`;
    }
     verInfoA = ()=> {document.write(this.info)} // funcion flecha. dentro de las clases no deja declarar las funciones.
}

let perro = new animales("perro",5,"cafe");
let gato = new animales("gato",3,"negro");

perro.verInfoA(); // llamamos la funcion
document.write("<br>");
gato.verInfoA();


//class con polimorfismo -------------------------------------------------------------3
document.write("<br>");

class personas {
    constructor(nombre,pais){
        this.nombre = nombre;
        this.pais = pais;
        this.info = `nombre: ${this.nombre} pais: ${this.pais} <br>`;
    }
    verInfoP = ()=> {document.write(this.info)}
    idioma = ()=> { // polimorfismo, dependiendo del pais las personas hablaran idiomas difernetes.
        if (this.pais == "EE.UU"){
            document.write("hi polymorphism <br>") 
        } else if (this.pais =="Colombia"){
            document.write("hola polimorfismo <br>")
        }else if (this.pais =="China") {
            document.write("喜多態 <br>")
        }else{
            document.write("idioma no identificado <br>")
        }
    }
}
let ser1 = new personas("Mark","EE.UU");
let ser2 = new personas("Miguel","Colombia");
let ser3 = new personas("Chan","China");
let ser4 = new personas("E.T","espacio");

ser1.verInfoP();
ser2.verInfoP();
ser3.verInfoP();
ser4.verInfoP();

ser1.idioma();
ser2.idioma();
ser3.idioma();
ser4.idioma();

//class con herencia ------------------------------------------------------------------4
document.write("<br>");

class automovil { // clase madre 
    constructor(modelo="2023",marca="FORD",color="GRIS"){
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
    }
}

class vendido extends automovil{ // clase hija
    constructor(modelo,marca,color,placa="ADC-874"){
        super(modelo,marca,color);
        this.placa = placa;
        this.infoC = `modelo: ${this.modelo} marca: ${this.marca} color: ${this.color} placa: ${this.placa} <br>`
    }
    
}

let dueño = new vendido(); // por defecto
let dueño2 = new vendido("2022","NISSAN","AZUL","ADB-948");

document.write(dueño.infoC);
document.write(dueño2.infoC);

//class con static --------------------------------------------------------------------5
document.write("<br>");

class celulares {
    constructor(marca){
        this.marca = marca;
    }
    static funciona(){ // Podremos llamar el método a un así, si no hemos creado el objeto
        document.write("Encendido ");
    }
}
// let portador = new celulares("nokia"); <--- objeto
//portador.funciona(); <--- llamar

celulares.funciona(); // <-- llamar sin objeto creado


// class con set y get ----------------------------------------------------------------6
document.write("<br></br>");

class teclados {
    constructor (marca,proposito,rendimiento){
        this.marca = marca;
        this.proposito = proposito;
        this.rendimiento = rendimiento;
    }
    set setProposito(x){ // modifcar
        this.proposito = x;
    }
    get getProposito(){ // ver
        return this.marca+" "+this.proposito+" "+this.rendimiento;
    }
}
let teclado1 = new teclados("redragon","gaming","alto");
let teclado2 = new teclados("logitech","gaming-office","alto");
let teclado3 = new teclados("samsung","gaming","medio");

document.write(teclado3.getProposito); // sin modifcar 
document.write("<br>");

teclado3.setProposito = "<b>office</b>"; // modificado
document.write(teclado3.getProposito);

//metodos de arrays ------------------------------------------------------------------7
//los metodos a continuacion modifican el array original
document.write("<br></br>");

let numeros = [1,2,3,4,5,6,7,8,9,10];
document.write("ARRAY ORIGINAL: "+numeros+"<br>");
 
document.write(numeros.pop()+"<br>");// elimina el ultimo valor de la array y retornelo  
document.write(numeros+"<br>");

document.write(numeros.shift()+"<br>"); // elimina el prime valor de la array y retornelo
document.write(numeros+"<br>");

document.write(numeros.push("X")+"<br>"); // agrege un nuevo valor y retorne en que posicion se agrego
document.write(numeros+"<br>");


document.write(numeros.reverse()+"<br>"); // muestra el array al reves y lo modifica.

//metodos de arrays accesores ----------------------------------------------------------8
// no modifcan el array original
document.write("<br></br>");

let numeros2 = [1,2,3,4,5,6,7,8,9,10];
document.write("ARRAY ORIGINAL: "+numeros2+"<br>");

document.write(numeros2.join(" ")+"<br>"); // convirte el array en texto
document.write(numeros2.join("___")+"<br></br>");

document.write(numeros2.slice(5)+"<br>"); // nos muestra el valor desde la posicion indicada
document.write(numeros2.slice(5,8)+"<br></br>");


document.write(numeros2.filter(i => (i<=5))+"<br>"); // nos imprime el array como si fuera un bucle
document.write(numeros2.filter(i => (i>=5))+"<br></br>");
document.write(numeros2.filter(i => (i))+"<br>"); 


//console --------------------------------------------------------------------------------9
// ir al index2.html y oprimir (crtl + shift + J) para ver el mensaje
// o omprimiendo F12

console.log("hola consola");

//console con un ejercicio --------------------------------------------------------------10
let nRomanos = ["I","II","III","IV","V"];

nRomanos.forEach(nR); 

function nR (value,index,array){ 
    console.log("["+index+"]"+value+"<br>"); //mostramos el resultado en consola 

}

























