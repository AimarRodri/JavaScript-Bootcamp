//1. Crea un array que almacene cinco animales

let animals = []
animals.push("Gato")
animals.push("Perro")
animals.push("Lagarto")
animals.push("Oveja")
animals.push("Cucaracha")

console.log(animals)

//2. Añade dos más. Uno al pirncipio y otro al final

animals.push("Serpiente")
animals.unshift("Dragón")

console.log(animals)

//3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)

console.log(animals)

//4. Crea un set que almacene cinco libros

let libreria = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])

console.log(libreria)

//5. Añade dos más. Uno de ellos repetido

libreria.add("Libro1")
libreria.add("Libro6")

console.log(libreria)

//6. Elimina uno concreto a tu elección

libreria.delete("Libro4")

console.log(libreria)

//7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(meses)
//8. Comprueba si el mes número 5  existe en el map e imprime su valor

console.log(meses.has(5))
console.log(meses.get(5))

//9. Añade al mapa una clave con un array como que almacene los meses de verano

meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

//10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = [1, 2, 3, 4, 5, 6]
let mySet = new Set(myArray)
console.log(mySet.size)
let myMap = new Map()
myMap.set("New", mySet)
console.log(myMap)