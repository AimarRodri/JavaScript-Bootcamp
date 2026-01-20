// Clases

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxix
let person = new Person("Aimar", 20, "Ejemplo")
console.log(person)

// Valores por defecto

class DefaultPerson{
    constructor(name="Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let persona3 = new DefaultPerson("Aimar", 20)
console.log(persona3)

//Acceso a propiedades

console.log(persona3.alias)

persona3.alias = "AliasEjemplo"
console.log(persona3.alias)

// Funciones en clases

class Person2 {
    constructor(name, age, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina")
    }
}

let person4 = new Person2("Aimar", 290)
console.log(person4)
person4.walk()

// Getters y setters

class GetPerson {
    #name
    #age
    #alias

    constructor(name, age, alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }
    get name(){
        return this.#name
    }
}

let persona5 = new GetPerson("Aimar", 29, "Rodri")
console.log(persona5.name)

// Herencia

class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal{
    
    
    
    run(){
        console.log("El perro corre")
    }
}

let myDog = new Dog("Toby")
myDog.run()
myDog.sound()

class Fish extends Animal {
    constructor(name, size){
        super(name)
        this.size = size
    }
    swim(){
        console.log("El pez nada")
    }
}

let myFish = new Fish("Atún", "Mediano")
myFish.swim()
myFish.sound()

//Métodos estáticos

class MathOperations{
    
    static sum(a,b){
        return a + b
    }
}
console.log(MathOperations.sum(5, 10))