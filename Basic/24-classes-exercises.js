//1. Crea una clase que reciba dos propiedades

class Vehicles {

    constructor(type, brand){
        this.type = type
        this.brand = brand
    }

    static addPresentation(){
        return `Este es el nuevo ${this.type} de la marca ${this.brand}`
    }

    startEngine(){
        console.log("Se ha encendido el motor")
    }
}
let myvehicle = new Vehicles("Coche", "BMW")

//2. Añade un método a la clase que utilice las propiedades


///3. Muestra los valores de las propiedades e invoca a la función

console.log(myvehicle.type)
console.log(myvehicle.brand)
console.log(myvehicle.startEngine())

//4. Añade un método estático a la primera clase

//5. Haz uso del método estático

//6. Crea una clase que haga uso de herencia

class Car extends Vehicles{

    #model
    #sits

    constructor(type, brand, model, sits){
        super(type, brand)
        this.#model = model
        this.#sits = sits
    }

    get model(){
        return this.#model
    }

    get sits(){
        return this.#sits
    }

    set model(newModel){
        this.#model = newModel
    }

    set sits(newSits){
        this.#sits = newSits
    }

    startEngine(){
        console.log("Se ha encendido el motor del coche")
    }
}

//7. Crea una clase que haga uso de getters y setters



//8. Modifica la clase con getters y setters para que use propiedades privadas

//9. Utiliza los get y set y muestra sus valores
let myCar = new Car("Car", "Renault", "Clio", 5)
console.log(myCar.model)
console.log(myCar.sits)
myCar.startEngine()
//10. Sobrescribe un método de una clase que utilice herencia
