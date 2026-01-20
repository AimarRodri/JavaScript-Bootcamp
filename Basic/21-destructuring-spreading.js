// Desestructuración

myArray = [1, 2, 3, 4]

//Sintaxis en Arrays

let [myValue0, myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)

// Sintaxis arrays con valores predeterminados

let [myValue4, myValue5, myValue6, myValue7, myValue8 = 0] = myArray
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)

// Ignorar elementos del array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

//Sintaxis objects
let person = {
    name: "Aimar",
    age: 20,
    alias: "Ejemplo"
}

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

let {name2, age2, alias2, email = "Email@ejemplo.com"} = person
console.log(name2) //No funciona
console.log(age2) //No funciona
console.log(alias2) //No funciona
console.log(email)

let {name: name3, age: age3, alias: alias3} = person
console.log(name3) 
console.log(age3) 
console.log(alias3)

//Desestructuración de objetos anidados

let person3 = {
    name: "Aimar",
    age: 20,
    alias: "Ejemplo",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        age: 5,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}

let {name: name4, job: {name: jobName}} = person3
console.log(name4)
console.log(jobName)

// Propagación (...)

let myArray2 = [...myArray] // Copia

let myArray3 = [...myArray, 5, 6]

console.log(myArray3)

//Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

//Sintaxis objects

let person4 = {...person, email: "rodriguezmarreroaimar@gmail.com"}
console.log(person4)

// Copia de objects

let person5 = {...person}
console.log(person5)