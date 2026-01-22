// // // 1. Crea una función para saludar que reciba un nombre y un useCallback
// // //    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]"
// // function useCallback(nombre){
// //     setTimeout(()=>{console.log(`Hola, ${nombre}`)}, 2000)
// // }


// // function saludar(nombre, callback){
// //     callback(nombre)
// // }
// // saludar("Aimar", useCallback)


// // // 2. Crea tres funciones task1(callback), task2(callback), task3(callback).
// // //    Cada función debe tardar  1 segundo en ejecutarse y luego llamar al callback.


// // function task1(callback) {
// //     setTimeout(() => {
// //         console.log("Task 1 terminada")
// //         callback()
// //     }, 1000)
// // }


// // function task2(callback) {
// //     setTimeout(() => {
// //         console.log("Task 2 terminada")
// //         callback()
// //     }, 1000)
// // }

// // function task3(callback) {
// //     setTimeout(() => {
// //         console.log("Task 3 terminada")
// //         callback()
// //     }, 1000)
// // }

// // task1(()=>{
// //     task2(()=>{
// //         task3(()=>{
// //             console.log("Todas las tareas han sido completadas")
// //         })
// //     })
// // })

// // // 3. Crea una función para verificar un número que retorne una PerformanceMeasure.
// // //    Si el número es par, la promesa se resuelve con el mensaje "Número par"
// // //    Si el número es impar, la promesa se rechaza con el mensaje "Número impar"

// // function PerformanceMeasure(number){
// //     return new Promise((resolve, reject)=> {
// //         if (number%2==0){
// //             resolve()
// //         } else {
// //             reject()
// //         }
// //     })
// // }
// // console.log(PerformanceMeasure(8).then(()=>{console.log("Número par")}).catch(()=>{console.log(("Número impar"))}))

// // 4. Crea tres funciones que devuelvan promesas:
// //    firstTask(): tarda 1s y muestra "Primera tarea completada"
// //    secondTask(): tarda 2s y muestra "Segunda tarea completada"
// //    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada"function firstTask(){
// function firstTask(){    
//     return new Promise(resolve => {
//         setTimeout(()=>{console.log("Primera tarea completada")}, 1000)
//         resolve()
//     })
// }

// function secondTask(){
//     return new Promise(resolve => {
//         setTimeout(()=>{console.log("Segunda tarea completada")}, 2000)
//         resolve()
//     })
// }

// function thirdTask(){
//     return new Promise(resolve => {
//         setTimeout(()=>{console.log("Tercera tarea completada")}, 1500)
//         resolve()
//     })
// }

// firstTask().then()
// secondTask().then()
// thirdTask().then()

// // 5. Transforma el ejercicio anterior de promesas en una función async/await llamada executeTasks().

// async function executeTasks() {
//     await firstTask()
//     await secondTask()
//     await thirdTask()
// }

// executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id}.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado0"
//    Usa  async/await para llamar a getUser(id) y maneja los errores con try/catch



// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id < 5) {
//                 resolve("Usuario " + id )
//             } else {
//                 reject("Usuario no encontrado")
//             }
//         }, 2000) // espera 2 segundos
//     })
// }

// async function execute(){
//     try {
//         console.log("User found:", await getUser(9))
//     } catch (error){
//         console.log("Error:", error)
//     }
// }

// execute()

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
// console.log("Inicio")
// setTimeout(()=> console.log("setTimeout ejecutado"), 0)
// Promise.resolve().then(()=>console.log("Promesa resuelta"))
// console.log("Fin")


// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen

// function promise1() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log("Primera promesa completa")
//             resolve()
//         }, 1000)
//     })
// }

// function promise2() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log("Segunda promesa completa")
//             resolve()
//         }, 2000)
//     })
// }

// function promise3() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log("Tercera promesa completa")
//             resolve()
//         }, 3000)
//     })
// }

// Promise.all([promise1(), promise2(), promise3()])
//     .then(results => {
//         console.log("All promise solved")
//         console.log("Results:", results)
//     })
// 9. Crea una función esperarSegundos(segundos) que use setTimeout dentro de una promesa para esperar la cantidad de segundos
//    indicada. A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola

// function waitSeconds(seconds){
//     return new Promise((resolve => {
//         setTimeout(() => {
//             resolve()
//         }, seconds*1000)
//     }))
// }

// async function execute(){
//     console.log("Espera 3 segundos...")
//     await waitSeconds(3)
// }
// execute()

//-------------------------------------------------------//

// function waitSeconds(seconds){
//     return new Promise((resolve => {
//         console.log(`Wait for ${seconds} seconds...`)
//         setTimeout(() => {
//             console.log("Time finished")
//             resolve()
//         }, seconds*1000)
//     }))
// }
// waitSeconds(3)

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let balance = 500

function checkBalance(){
    return new Promise (resolve => {
        setTimeout(() => {
        console.log(`Balance: ${balance}`)
        resolve()
        }, 1000)
    })
}

function withdrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (balance>=amount){
                balance-=amount
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

async function execute(){
    await checkBalance()
    
    console.log("Withdrawing 300...")
    
    try {
        await withdrawMoney(300)
        console.log(`Successful operation: actual balance: ${balance}`)
    } catch (error){
        console.log(`Error: ${error}`)
    }

    await checkBalance()
    
    console.log("Withdrawing 300...")
    
    try {
        await withdrawMoney(300)
        console.log(`Successful operation: actual balance: ${balance}`)
    } catch (error){
        console.log(`Error: ${error}`)
    }

}

execute()