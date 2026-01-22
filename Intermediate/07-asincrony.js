// Programaciñon asíncrona

// Código síncrono

console.log("Inicio")

for ( let i  = 0; i < 100000000; i++){

}
console.log("Fin")

// Event loop (Bucle de eventos)

// Componentes del Event Loop
// - Call Stack (Pila de ejecución): Funciones
// - Web APIs (APIs del navegador) o Node.js: setTimeout()...
// - Task Queue (Cola de tareas) y MicrotaskQueue

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queu o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// -Callbacks => Es una función que se pasa como argumento a otra función

console.log("Inicio")

setTimeout(()=> {console.log("Esto se ejecuta")},2000)

console.log("Fin")

// - Problema: Callback Hell => Se da cuando por necesidad del programa debemos enlazar muchas callbacks unas con otras

// function step1(callback){
//     setTimeout(() => {
//         console.log("Paso 1 completado")
//         callback()
//     }, 1000)
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("Paso 2 completado")
//         callback()
//     }, 1000)
// }

// function step3(callback){
//     setTimeout(() => {
//         console.log("Paso 3 completado")
//         callback()
//     }, 1000)
// }

// step1(()=> {
//     console.log("Todos los pasos completados")
// })

// - Promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok){
            resolve("Operación exitosa")
        }else{
            reject("Se ha producido un error")
        }
    }, 3000)
})

promise.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(rejecte)
})

console.log("Fin del programa")

// - Encadenamiento de promesas

// - Async/Await

async function process(){

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

    console.log("Inicio del proceso")

    await wait(5000)

    console.log("Proceso después de 5 segundos")

    console.log("Fin del proceso")
}

process()