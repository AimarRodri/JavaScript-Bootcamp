//Operadores

//Operadores Aritméticos

let a = 5
let b = 10

console.log(a+b) //Suma
console.log(a-b) //Resta
console.log(a*b) //Multiplicación
console.log(a/b) //División

console.log(a%b) //Resto de la división(Módulo)
console.log(a**b) //Exponente

a++
console.log(a++) //Incremento
console.log(a--) //Decremento

//Operadores de asignaciónç

let myVariable = 2 //Igual
console.log(myVariable)
myVariable +=2 //Sumo el valor a el valor de la variable
myVariable -=2 //Resto el valor a el valor de la variable
myVariable *=2 //Multiplico el valor a el valor de la variable
myVariable /=2 //Divio el valor a el valor de la variable

//Operadores de comparación

console.log(a>b) //Mayor que
console.log(a<b) //Menor que
console.log(a>=b) //Mayor igual que
console.log(a<=b) //Menor igual que
console.log(a==a) //Igualdad por valor
console.log(a==="6") //Igualdad por identidad (por tipo y valor)
console.log(a!=6)

// Truthy values (valores verdaderos)

//Todos los números positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
//El boolean true

//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacías

//Operadores lógicos

// and (&&)

console.log(5>10 && 15>20)
console.log(5<10 && 15<20)

// or (||)
console.log(5>10 || 15>20)
console.log(5<10 || 15<20)

// not (!)

console.log(!(5>10 && 15>20))
console.log(5<10 && 15<20)

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")