//Strings

//Concatenación de cadenas
let myName = "Aimar"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Aimar"))
console.log(greeting.includes("Aimar"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Aimar", "Juan"))

//Template literals (plantillas literales)

let message = `Hola, este es mi
curso de javascript`
console.log(`Hola, ${myName}!`)