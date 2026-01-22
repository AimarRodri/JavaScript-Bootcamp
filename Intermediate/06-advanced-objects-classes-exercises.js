//1. Agrega una función al prototipo de un objeto


//2. Crea un objeto que herede de otro

//3. Define un método de instancia en un objeto

//4. Haz uso de get y set en un objeto

//5. Utiliza la operación assign en un objeto

//6. Crea una clase abstracta
class Animal {
    constructor(name, age, isExtinct){
        if (new.target === Animal){
            throw new Error("Esta clase es abstracta")
        }
        this.name = name
        this.age = age
        this.isExtinct = isExtinct
    }

    eat(){
        throw new Error("Se debe de reescribir este método en la clase que hereda")
    }
}

// const animal = new Animal()
// console.log(animal)
//7. Utiliza polimorfismo en dos clases diferentes

class monkey extends Animal{
    eat(){
        console.log("El mono come con las manos")
    }
}
class human extends Animal{
    eat(){
        console.log("El humano come con cubiertos")
    }
}
const myMonkey = new monkey("Juan", 12, false)
const myHuman = new human("Carlos", 35, false)
myMonkey.eat()
myHuman.eat()

//8. Implementa un Mixin

const hasTail = {
    tailed(){
        return "This animal has tail"
    }
}
Object.assign(monkey.prototype, hasTail)
const otherMonkey = new monkey("Francis", 5, false)
console.log(otherMonkey.tailed())

//9. Crea un Singleton

class Session {
    constructor(userName, password){
        if (Session.instance){
            return Session.instance
        }
        this.userName = userName
        this.password = password
        Session.instance = this
    }
}

//10. Desarrolla un Proxy

const proxy= {
    get(){
        console.log("Has accedido al proxi de obtención")
    },
    set(){
        console.log("Has accedido al proxy de corresponencia")
    }
}
class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}
const account = new Proxy(new BankAccount(20), proxy)
console.log(account.balance)

account.balance = 10