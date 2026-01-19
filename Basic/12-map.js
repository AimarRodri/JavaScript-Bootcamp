//Map (Diccionario)

// Declaración

let myMap = new Map()

console.log(myMap)

//Inicialización

myMap = new Map([
    ["name", "Aimar"],
    ["email", "rodriguezmarreroaimar@gmail.com"],
    ["age", 20]
])
console.log(myMap)

//Métodos y propiedades

//set

myMap.set("alias", "aliasEjemplo")
myMap.set("name", "Jose")

console.log(myMap)

//get

console.log(myMap.get("name"))

//has
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete

myMap.delete("email")
console.log(myMap)

//clear

myMap.clear()
console.log(myMap)