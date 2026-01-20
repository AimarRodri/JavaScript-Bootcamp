//1. Crea un objeto con 3 propiedades

let car = {
    Brand: "Renault",
    Model: "Clio",
    Capacity: 5
}

//2. Accede y muestra su valor

console.log(car)

//3. Agrega una nueva propiedad

car.age = 10

//4. Elimina una de las 3 primeras propiedades

delete car.Model

console.log(car)
//5. Agrega una función e invócala

car.startEngine = function(){console.log("Enciende el coche")}

console.log(car)
//6. Itera las propiedades del objeto

for (let value in car){
    console.log(value)
}

//7. Crea un objeto anidado

car.driver = {name: "Aimar",
    licenseAge: "1 month"
}

console.log(car)

//8. Accede y muestra el valor de las propiedades anidadas

console.log(car.driver.name)
console.log(car.driver.licenseAge)

//9. Comprueba si los dos objetos creados son iguales

console.log(car == car.driver)

//10. Comprueba si dos propiedades diferentes son iguales

console.log(car.Brand == car.Capacity)