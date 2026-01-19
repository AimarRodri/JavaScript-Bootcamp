//1. Escribe un comentario en una linea

//Comentario de ejemplo

//2. Escribe un comentario en varias lineas

/*Comentario de ejemplo1
Comentario de ejemplo2
Comentario de ejemplo3
Comentario de ejemplo4*/ 

//3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Aimar"
let edad = 20
let isStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("mySymbol")
let myBigInt = BigInt(7812667816871269871671867817913712639871638)

console.log("-----------------------------")
//4. Imprime por consola el valor de todas las variables

console.log(nombre)
console.log(edad)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)

console.log("-----------------------------")
//5. Imprime por consola el tipo de todas las variables

console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(isStudent))
console.log(typeof(undefinedValue))
console.log(typeof(nullValue))
console.log(typeof(mySymbol))
console.log(typeof(myBigInt))

//6. A continuaciónm, modifica los valores de las variables por otros del mismo tipo

nombre = "Josep"
edad = 21
isStudent = false
myBigInt = 9893862736378n

console.log("-----------------------------")
//7. A continuación, modifica los valores de las variables por otros de distinto tipo

nombre = 48
edad = "Jose"
isStudent = 89326376283n
myBigInt = "asddsfa"

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const company = "2Coders"

console.log("-----------------------------")
//9. A continuación, modifica los valores de las constantes

//No se pueden modificar los valores de las constantes

//10. Comenta las líneas que produzcan algíun tipo de error al ejecutarse