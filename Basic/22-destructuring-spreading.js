//1. Usa desestructuración para extraer los dos primeros elementos de una array
myArray = [1, 2, 3, 4, 5]

let [number1, number2] = myArray
console.log(number1)
console.log(number2)

//2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
myArray2 = [1, 2, 3, 4, 5]

let [number3, number4, , , ,  number8 = 0] = myArray2
console.log(number3)
console.log(number4)
console.log(number8)

//3. Usa desestructuración para extraer dos propiedades de un ubjeto
let person = {
    name: "Aimar",
    age: 20,
    isStudent: true,
    job: {
        jobName: "Programmer",
        experience: "No experience",
    }
}

let {name, age} = person
console.log(name)
console.log(age)

//4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//   a nuevas variables con nombres diferentes

let {name: name1, age: age1} = person
console.log(name1)
console.log(age1)

//5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {job: {jobName: jobName1, experience: experience1}} = person
console.log(jobName1)
console.log(experience1)

//6. Usa propagación para combinar dos arrays en uno nuevo
array3 = [1, 2, 3, 4, 5]
array4 = [6, 7, 8, 9, 10]
let array5 = [...array3, ...array4]
console.log(array5)

//7. Usa propagación para crear una copia de un array

let copyArray = [...array5]
console.log(copyArray)

//8. Usa propagación para combinar dos objetos en uno nuevo

let car = {
    Brand: "Renault",
    Model: "Clio",
    Capacity: 5
}

let motorbike = {
    brand: "Honda",
    weight: 200
}

let vehicles = {...car, ...motorbike}
console.log(vehicles)

//9. Usa propagación para crear una copia de un objeto 

let copyCar = {...car}
console.log(copyCar)

//10. Combina desestructuración y propagación

let [{Brand: brand1, Model: model1}] = vehicles
console.log(brand1)