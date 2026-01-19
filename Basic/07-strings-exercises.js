// 1. Concatena dos cadenas de texto

let myName = "Aimar"
let greeting = "Bienvenido al bootcamp, "+ myName
console.log(greeting)

// 2. Muesta la longitud de una cadena de texto

console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[greeting.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let example = `asdfasdfasdfasd
asasdfasdfasdfasd`

// 6. Interpola el valor de una variable en una string

console.log(greeting.replace("Bienvenido", "Entrastes"))

// 7. Reemplaza todos los espacios en blanco de una string por guiones

console.log(greeting.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("al"))

// 9. Comprueba si dos strings son iguales

console.log(greeting==myName)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(greeting.length==myName.length)