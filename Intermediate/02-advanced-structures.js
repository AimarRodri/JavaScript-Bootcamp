// Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(value => console.log(value))

// map --> Crea un nuevo array

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter --> Crea un array con los elementos filtrados según la condición

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((previous, current) => previous + current)
console.log(sum)

// - Manipulación

// flat

let nestedArray = [1, [2,  [3, [4]]]]
let flatArray = nestedArray.flat(3)

console.log(nestedArray)
console.log(flatArray)

// flatMap

let  phrases = ["Hola mundo", "Adios mundo"]
let words = phrases.flatMap(phrases => phrases.split(" "))

console.log(words)

// - Ordenación

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort() 
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a,b) => a - b) // Si da un número negativo, el primero número es menor
console.log(sorted)

// reverse

sorted.reverse()
console.log(sorted)

// - Búsqueda

// Includes
console.log(sorted.includes(4))
console.log(sorted.includes(5))

// Find

let firstEven = sorted.find(value => value % 2 === 0)
console.log(firstEven)

// FindIndex

// let firstEvenIndex = sorted.firstIndex(value => value % 2 === 0)
// console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

//Intersección

const intersection = new Set([...setA].filter(value => setB.has(value)))
console.log(intersection)

//Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversión

console.log([...setA])

// Iteración

// forEach

setA.forEach(value => console.log(value))

// Maps avanzados

let myMap = new Map([
    ["name", "Aimar"],
    ["age", 20]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}` ))

// - Conversión

// Mapa a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Mapa a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a mapa

const mapFromObject = new Map(Object.entries(objectFromMap))

