//Set

//Decalaración

let mySet = new Set()

//Inicialización

mySet = new Set(["Aimar", "Rodriguez", "Marrero", 20, true])
console.log(mySet)

//Métodos comunes

// add y delete

mySet.add("Ejemplo")

console.log(mySet)

mySet.delete(20)

console.log(mySet)

//has

mySet.has("Aimar")

//size

console.log(mySet.size)

//Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

console.log(mySet.add("Aimar"))