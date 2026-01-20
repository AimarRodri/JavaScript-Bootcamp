// Objetos

// Sintaxix

let person = {
    name: "Aimar",
    age: 20,
    alias: "Ejemplo"
}

//Acceso a las propiedades
console.log(person.name)
//Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación

person.name = "Aimar Rodriguez"
console.log(person.name)

// Eliminar propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "rodriguezmarreroaimar@gmail.com"
console.log(person)

// Métodos(funciones)
let person2 = {
    name: "Aimar",
    age: 20,
    alias: "Ejemplo",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

// Anidación de objects
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
console.log(person3.job.work)
console.log(person3)

// Igualdad de object

//Funciones como objects

function Person(name, age){ //Se puede pero debería de ser una clase
    this.name = name
    this.age = age
}