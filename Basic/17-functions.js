// Funciones

function myFunc(){
    console.log("Hello, my function")
}

for (let i = 0; i<5;i++){
    myFunc()
}

// Función con parametros

function myFuncWithParams(name){
    console.log(`Hello, ${name}`)
}

myFuncWithParams("Aimar")

//Funciones anónimas

const myFunc2 = function(name){
    console.log(`Hello, ${name}`)
}

myFunc2("Juan")

// Arrow Functions

let muFunc3 = (name)=>{
    console.log(`Hola, ${name}`)
}

//Parámetros

function sum(a, b){
    console.log(a + b)
}

// Retorno de valores

function mult(a, b){
    return a*b
}

let result = mult(5, 10)

console.log(result)

// Funciones anidadas

function extern(){
    console.log("Función externa")
    function intern(){
        console.log("Función interna")
    }
    intern()
}

extern()

// Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

// forEach

let myArray = [1, 2, 3, 4, 5]

myArray.forEach(function (value){
    console.log(value)
})