// Objetos avanzados

// - Prototipos y herencia

// Prototipos

let person = {
    name: "Aimar",
    age: 20,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}
console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge =  function(){
    console.log(`Tengo ${this.age} años`)
}

// Herencia

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "Jose Juan"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()
// - Métodos estáticos y de instancia

function Person(name, age){
    this.name = name
    this.age = age
}

let newPerson = new Person("Aimar", 20)
Person.prototype.greet = function(){
    console.log(`Hola, soy ${this.name}`)
}
newPerson.greet()
// - Métodos avanzados
// assign

let personCore = {name: "Aimar"}
let personDetails = {age: 20, email:"rodriguezmarreroaimar@gmail.com"}
let fullPerson = Object.assign(personCore, personDetails)

// kyes, values, entries
console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))