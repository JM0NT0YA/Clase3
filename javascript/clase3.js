// declara la variable sin inicializar
let nombreUsuario;
// declaracion con valor inicial
let user = "Juan";

console.log(nombreUsuario); // undefined.
console.log(user); // Juan

// Operador ternario
user === "Pedro" ? console.log("Es correcto") : console.log("No es correcto"); 

// const ES PARECIDO A CONSTANTE
const PI=3.1416;
// trato de cambiar el valor, da error
// PI=20;

// metodos propios del lenguaje
let PI_DOS;
PI_DOS= Math.PI;
user.includes("P"); // devuelve true si hay una 'a' en el string
console.log(user.length); // Devuelve la longitud del string 

// Metodos o Funciones
// Arrow Function
const SaludarUsuario = ( ) => {
    return "Hola Juan";
}

const saludarUser = nameUser =>{
    //concatena "Hola" con nameUser
    return "Hola " +nameUser;   
}

const sumarDatos = (numberOne, numberTwo) => {
    return numberOne+numberTwo;  
} 
console.log(sumarDatos(1.0,'2'));
// instancia de una funcion.     hace lo mismo
let tres = saludarUser;
console.log(tres("Pedro"));

// ciclos
for  (let i=0 ;i<10;i++){
    console.log(i); 
}
// funciones (forma anterior)
function sum(numero1,numero2){

}

const wave = function(){

}

// construir 3 funciones (arrow function)
// 1. sin parametros
const saludar = () => '¡Hola, Pascual!';
console.log(saludar()); // Salida: '¡Hola, mundo!'

// 2. 1 parametro

const doble = x => x * 2;
console.log(doble(5)); // Salida: 10

// 3. 2 o mas  parametros
const sumar = (x, y) => x + y;
console.log(sumar(3, 4)); // Salida: 7

// declarar Variables con let y const
// 5 como minimo
const nombre = 'Jhon';
let edad = 30;
const esEstudiante = false;
const pasatiempos = ['leer', 'escribir', 'correr'];
const hoy = new Date();

