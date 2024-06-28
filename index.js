// Ejercicio 1
/*let numero =parseInt(prompt("ingresa un numero"))
for (let i= 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
    
}*/

//Ejercicio 2
let ingreso = 0
let numero

do {
    numero = parseInt(prompt("Ingrese un numero"))
    ingreso += numero
    console.log(`La suma de los números ingresados es: ` + ingreso)

}
while (numero =! 0)


// Ejercicio 3
/*let numeroIncognita = Math.floor(Math.random()*100)+1
console.log(numeroIncognita);
let intentos = 0
let numeroingresado 
do {
    numeroingresado = parseInt(prompt("Ingresa un numero del 1 al 100"))
    intentos++
    if (numeroingresado > numeroIncognita){
        console.log ("El numero ingresado es mayor, vuelve a intentarlo ingresando un numero menor")
    }else if (numeroingresado < numeroIncognita) {
        console.log ("El numero ingresado es menor, intenta de nuevo ingresando un numero mayor")
    }
    
} while (numeroingresado !== numeroIncognita)
console.log(`Ganaste, felicidades Numero de intentos ${intentos}`)*/

// Ejercicio 4
/*function esPrimo(numerop){
if (numerop <= 1) {
    return false;
  }
for (let i = 2; i <= Math.floor (numerop/2); i++) {
    if (numerop % i === 0){
        return false;

    }
}
return true;
}
console.log(esPrimo(29));  // Output: true
console.log(esPrimo(50));  // Output: fals*/

// Ejercicio 5
/*function mostrarDivisores(numerop){
    if (numerop <= 1) {
        return false;
      }
    console.log (`Divisores ${numerop}`);
    for (let i = 1; i <= numerop; i++) {
        if (numerop % i === 0){
            console.log(i)
    
        }
    }
}
console.log(mostrarDivisores(50));

// Ejercicio 6
let arreglo = [1,2,3,4,5,6,7,8,9,10]
function conteo(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log (arr[index]);
        
    }
}
conteo(arreglo);

// Ejercicio 7
let arreglo1 = [1,2,3,4,5,6,7,8,9,10]
function conteodoble(arrg){
    for (let index = 0; index < arrg.length; index++) {
        console.log (arrg[index]*2);
        
    }
}
conteodoble(arreglo1);

// Ejercicio 8
let familialopzZ = [
    {Nombre: "Carlos",  Apellidos : "Lopez Zambrano",   Edad: "24",    Ocupacion: "Mecatronica"},
    {Nombre: "Jose",   Apellidos : "Lopez Zambrano",   Edad: "27",    Ocupacion: "Marketing"},
    {Nombre: "Sebastia", Apellidos : "Zambrano Alcorta", Edad: "34",    Ocupacion: "Empresaria"},
    {Nombre: "Melany",   Apellidos : "Lopez Castillo",   Edad: "29",    Ocupacion: "Contador"},
    {Nombre: "Danna", Apellidos : " Alcorta Vega",    Edad: "37",    Ocupacion: "Doctora"}
];
function mostrarPresentacionFamilia(familialopzZ) {
    console.log("Presentación de la familia:");
  
    for (let persona of familialopzZ) {
      console.log(`Hola, soy ${persona.Nombre}, tengo ${persona.Edad} años, y trabajo como ${persona.Ocupacion}.`);
    }
}
  mostrarPresentacionFamilia(familialopzZ);

// Ejercicio 9
let arreglo3 = [1,2,3,4,5,6,7,8,9,10]
function conteoimp(ar){
    for (let index = 0; index < ar.length; index++) {
        if (ar [index] % 2 !== 0){
            console.log (ar[index]);

    
        }
        
    }
}
conteoimp(arreglo3);

// Ejercicio 10
function calculasumas (){
let sumadepares= 0
let sumadeimpares= 0
while (true) {
    let numero1 = parseInt(prompt("Ingrese un numero"));


if (numero1 === 0) {
    break;
}
if (numero1 % 2 === 0) {
    sumadepares += numero1;
  } else {
    sumadeimpares += numero1;
  }
  console.log (`Suma de números pares: ${sumadepares}`)
  console.log (`Suma de números impares: ${sumadeimpares}`)
}
}
calculasumas ();

// Ejecicio 11
let arreglo4 = [1,2,3,4,5,6,7,8,9,10]
function maximo(arg){
let maxnum = arg[0]
for (let index = 1; index < arreglo4.length; index++) {
    if (arg [index]> maxnum){
        maxnum = arg [index]
    }
    
}
console.log (`El numero mayor es: ${maxnum}`)

}
maximo(arreglo4);

// Ejercicio 12
let arreglo5 = [1,2,3,4,5,6,7,8,9,10]
function minimo(args){
let minnum = args[0]
for (let index = 1; index < arreglo5.length; index++) {
    if (args [index]< minnum){
        minnum = args [index]
    }
    
}
console.log (`El numero menor es: ${minnum}`)

}
minimo(arreglo5);

// Ejercicio 13
function juguemos(){
    let jugador1 = prompt(" Jugador 1 ingresa tu nombre")
    let jugador2 = prompt(" Jugador 2 ingrese tu nombre")
    console.log(`Empieza el juego entre ${jugador1} y ${jugador2}!\n`);
while (true) {
    let jugada1 = prompt(`${jugador1}, elige Piedra, Papel o Tijeras:`)
    let jugada2 = prompt(`${jugador2}, elige Piedra, Papel o Tijeras:`)

 if (jugada1 === jugada2){
    console.log("Empate");
    continue;

} else if (
    (jugada1 === "Piedra" && jugada2 === "Tijeras") ||
    (jugada1 ===  "Papel"  && jugada2 === "Piedra") || 
    (jugada1 === "Tijeras" && jugada2 === "Papel")
) {  
        console.log(`¡${jugador1} es el ganador del juego!`);
        break;
} else { 
            console.log(`¡${jugador2} es el ganador del juego!`);
            break;
        }

    }
}
juguemos();

// Ejercicio 14
let lado = 5

for (let index = 1; index <= lado; index++) {
    let linea = '';
    

for (let j = 1; j <= (lado - index); j++) {
    linea += ' ';
    
}
for (let k = 1; k <= (index * 2-1); k++) {
    linea += '*';
    
}
console.log(linea);
}

// Ejercicio 15
let lado1 = 5

for (let index = lado1; index >= 1; index--) {
    let linea1 = '';
    

for (let j = 1; j <= (lado1 - index); j++) {
    linea1 += ' ';
    
}
for (let k = 1; k <= (index * 2-1); k++) {
    linea1 += '*';
    
}
console.log(linea1);
}

// Ejercico 16
let arreglo6 = [5, 2, 8, 10, 6, 3, 1, 7, 4, 9];
console.log("Array desordenado:");
console.log(arreglo6);
function ordenarArray(ags) {
    
    let len = ags.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arreglo6[j] > ags[j + 1]) {
         
          let elem = ags[j];
          ags[j] = ags[j + 1];
          ags[j + 1] = elem;
        }
      }
    }
  }
  ordenarArray(arreglo6);
  console.log("\nArray ordenado:");
  console.log(arreglo6);*/