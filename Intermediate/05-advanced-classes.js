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

// Clases abstractas => En JavaScript hace falta controlar los erores para cuando se intenta acceder a datos o métodos
// de una clase abstracta, esto se hace mediante identificar si el nuevo objeto es de la instancia de la clase (new.target === nombreClase)

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

// - Polimorfismo =>  Al heredar de una clase abstracta no da fallo, ya que la instancia de los objetos de la nueva clase es diferente
// a animal, eso si, se le tiene que introducir los atributos, así como reescribir el método.

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

// - Mixins => Es la forma que tenemos en JavaScript de añadirle a clases que heredan de otra una función, simplemente se usará
// el método de Object, assign con la clase a la que se le quiere añadir la función.prototype y función, que estará  alojada en una variable

const FlyMixin = {
    fly(){
        console.log(`Está volando`)
    }
}

class Bird extends Animal { }
class Dragon extends Animal { }
Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)
const bird = new Bird("aimarBird")
console.log(bird.name)
bird.fly()

// - Patrón Singleton => Se usa para asegurarse de que solo existe una instancia de clase, para esto lo controlamos con un if,

class Session{
    constructor(name){
        //Accede a la propiedad instance de la clase session, si existe, devolvemos la propia instancia(que ya fue creada), si no,
        //se construye normal.
        if (Session.instance){
            //Devolvemos lla instancia de la sesion, habiendo esta sido creada o inicializada dentro de la clase, como propiedad
            return Session.instance
        }
        this.name = name
        //Guardamos a nivel de session una propiedad instance, asociada a la primera estancia que se haga.
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

// - instanceOf => Es la manera de revisar instancias

class Car{}
const car = new Car()

console.log(car instanceof Car)

// - create => Es la manera de crear un coche, accediendo a su prototipo

const anotherCar = Object.create(Car.prototype)

// - Proxy => Nos sirve para interceptar y personalizar comportamientos de clases

const proxy = {
    get(target, property){
        return target[property]
    },
    set(target, property, value){
        if (property === "balance" && value < 0){
            throw new Error("El saldo no puede ser negativo")
        }
        return target[property] = value
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

//Esto es un objeto propio de JavaScript, lo que hace es por así decirlo, conectar la clase que se quiere conrtolar con un proxy
//predefinido
const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)