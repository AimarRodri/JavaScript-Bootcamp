// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name){
    console.log(`Hola, ${name}`)
}

greet("Aimar")

function processGreeting(greetFunction, name){
    greet(name)
}

function returnGreeting(){
    return greet
}

processGreeting(greet, "MoureDev")

const greet2 = returnGreeting()

console.log(returnGreeting("Aimar"))

// Arrow functions  avanzadas

const mult = (a, b) => a * b
console.log(mult(2, 5))

// - this léxico

const handler = {
    name: "Aimar",
    greeting: function(){
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE ( Expresión deFunción Invocada Inmediatamente)

(function() {
    console.log("IIFE clásico")
})()

// Parámetros Rest (...) => Introduce lo valores definidos a posteriori de él en un array, sin importar la cantidad de valores que se le inserte

function sum(...numbers){
    console.log(numbers)
}

console.log(sum(1, 2, 3))

// Operador Spread (...) => Desempaqueta un array, para que la función utilice sus valores

const numbers =[1, 2, 3]
function sumWithSpread(a, b, c){
    return a + b + c
}
console.log(sumWithSpread(...numbers))

// Closures (Clausuras)

function createCounter(){
    let counter = 0
    return function (){
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

const counter = createCounter()
counter()
counter()
counter()

// Recursividad
function factorial(n){
    if (n == 1){
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))

//Funciones parciales => Son útiles para poder llamar a una 

function partialSum(a, b, c){
    return function (b, c){
        return sum(a, b, c)
    }
}

function sum(...numbers){
    let result = 0
    for (let number of numbers){
        result+=number
    }
    return result
}

const sumWith = partialSum(5)
console.log(sumWith(3, 2))

// Currying => Se utiliza para subdividir diferentes funciones

function currySum(a){
    return function(b){
        return function(c){
            return sum(a,b,c)
        }
    }
}
const sumAB = (currySum(1)(2))
console.log(sumAB(3))

// Callbacks => A una función le pasamos otra función para personalizar su comportamiento
function processData(data, callback){
    const result = sum(...data)
    callback(result)
}
function processResult(result){
    console.log(`El resultado es: ${result}`)
}

processData([1, 2, 3], processResult)