// Console

// Log

console.log("Hola, JavaScript!")

//Error
console.error("Este es un mensaje de error")
console.error("Error  al conectarse a la base de datos: ", new Error("Conexión fallida."))

//Warn

console.warn("Este es un mensaje de advertencia")

//info

console.info("Este es un mensaje de información adicional.")

//table
let data = [
    {name: "Aimar", age: 20},
    {name: "Sara", age: 24}
]

console.table(data)

// group
console.group("Usuario:")
console.log("Nombre: Aimar")
console.log("Edad: 20")
console.groupEnd()

//time

console.time("Tiempo de ejecución")

for (let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecución")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe de ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución")
}

// clear

//cnosole.clear()