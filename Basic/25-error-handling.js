// Exception
let myObject
//console.log(myObject.email)

//Captura de errores

// try-catch

try{
    //Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch(error) {
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
}

//Finally

try{
    //Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch(error) {
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

//Lanzamiento de errores


//throw new Error("Se ha producido un error")

function sum(a, b){
    if (typeof a != Number || typeof b != Number){
        console.log("No se pueden sumar estas propiedades")
    }
    return a + b
}

console.log(sum(5, 10))

// Crea excepciones personalizadas

class SumIntegerError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
}