//array

//Declaración

let myArray = []
let myArray2 = new Array()


myArray=["Hola", "Bienvenido", "Que", "Tal"]
console.log(myArray)
//Métodos comunes

myArray = []
//push y pop ---- Ingresar elementos y eliminarlos (devolviendolos) de el final del array

myArray.push("Aimar")
myArray.push("Rodriguez")
myArray.push("Marrero")
myArray.push(20)

myArray.pop()
console.log(myArray.pop())

console.log(myArray)

//shift y unshift ---- Ingresar o quitar elementos a el array desde el principio


//slice

console.log(myArray)
myArray.push("Marrero")
myArray.push(37)
console.log(myArray)

let myNewArray = myArray.slice(1, 3)
console.log(myNewArray)

//splice

myArray.splice(1, 2)
console.log(myArray)