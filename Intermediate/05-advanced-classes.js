// Clases avanzadas

class Person {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = age
    }

    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Aimar", 20)
person.greet()

person.sayAge =  function(){
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

// Clases abstractas

class Animal {
    constructor(name){
        if (new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
        console.log("Emito sonido")
    }
}
//ERROR
// const animal = new Animal("Gato")
// console.log(animal)

// - Polimorfismo

class Cat  extends Animal{
    makeSound(){
        console.log("Miau!")
    }
}
const cat = new Cat("Happy")
console.log(cat)
cat.makeSound()

class Dog  extends Animal{
    makeSound(){
        console.log("Guau!")
    }
}
const dog = new Dog("Mawi")
console.log(dog)
dog.makeSound()

// - Mixins

const FlyMixin = {
    fly(){
        console.log(`Está volando`)
    }
}

class Bird extends Animal{

}

class Dragon extends Animal{
    
}

Object.assign(Bird.prototype, FlyMixin)


const bird = new Bird("EjemploBird")

bird.fly()

const dragon = new Dragon("EjemploDragon")

// - Patrón Singleton

class Session{
    constructor(name){
        if (Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Aimar")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

// - Symbol

const ID = Symbol("id")

class User {
    constructor(name){
        this.name = name
        this[ID] = Math.random()
    }
}

const user = new User("Aimar")
console.log(user.name)
console.log(user[ID])

// - instanceOf

class Car{}
const car = new Car()

console.log(car instanceof Car)

// - create

const anotherCar = Object.create(Car.prototype)

// - Proxy

const proxy = {
    get(){
        console.log("get")
    },
    set(){
        console.log("set")
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)