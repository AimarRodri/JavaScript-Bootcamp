//1. Crea una función que retorne a otra función

function greet(name){
    return `Hola, $${name}`
}

function greetSomeone(name){
    return greet(name)
}

console.log(greetSomeone("Aimar"))

//2. Implementa una función currificada que multiplique 3 números

function mult(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}

const mult1 = mult(4)(2)
console.log(mult1(5))
//3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(number, expo){
    if (expo==1){
        return number
    }
    return number * power(number, expo-1)
}

console.log(power(2, 3))

//4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value){
    let counter = value
    return {
        increment(){counter+=1},
        decrement(){counter-=1},
        getValue(){return `Actualmente el valor del contador es: ${counter}`}
    }
}

const counter = createCounter(5)

console.log(counter.getValue())
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getValue())
counter.decrement()
counter.decrement()
console.log(counter.getValue())

//5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let sumNumbers = 0
    for (let number of numbers){
        sumNumbers+=number
    }
    console.log(multiplier * sumNumbers)
}
sumManyTimes(5, 4, 3, 2, 1)

//6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumaPresentation(resultSuma){
    console.log(`El resultado de la suma es: ${resultSuma}`)
}

function suma(numbers){
    resultSuma = 0
    for (let number of numbers){
        resultSuma+=number
    }
    //Realmente esto es la callback
    return sumaPresentation(resultSuma)
}

suma([4,3,2,1])
//7. Desarrolla una función parcial

function completeGreet(name, surname, meal){
    return function (surname, meal){
        return `Hola ${name} ${surname}, quieres ${meal}`
    }
}
const greet2 = completeGreet("Aimar")
console.log(greet2("Rodriguez", "Arroz"))

//8. Implementa un ejemplo que haga uso de Spread


//9. Implementa un retorno implícito

//10.  Haz uso del this léxico