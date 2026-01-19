/*//1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i<=20; i++){
    console.log(i)
}

//2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let contador = 0
for (let i = 1; i<=100;i++){
    contador+=i
}
console.log(contador)

//3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i<=50;i++){
    if (i%2==0){
        console.log(i)
    }
}


//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Aimar", "Laura", "Cristian", "Cristina"]
for (let i = 0; i<nombres.length;i++){
    console.log(nombres[i])
}

//5. Escribe un bucle que cuente el número de vocales en una cadena de texto

//let contador = 0
let texto = "El viento mueve sueños mientras el sol despierta caminos nuevos"
for (let i = 0; i<texto.length;i++){
    if (texto[i]=="a" || texto[i]=="o" || texto[i]=="i" || texto[i]=="o" || texto[i]=="u"){
        contador++
    }
}
console.log(contador)

//6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let contador= 0
let numeros = [1, 2, 3, 4, 5, 6, 7]
contador = numeros[0]
for (let i = 1; i<numeros.length;i++){
    contador*=numeros[i]
}
console.log(contador)

//7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i<=10;i++){
    console.log(`5 x ${i} = ` + 5*i)
}

//8. Usa un bucle para invertir una cadena de texto

let  texto = "El viento mueve sueños mientras el sol despierta caminos nuevos"
let resultado = ""
for (let i = texto.length-1;i>=0;i--){
    resultado+=texto[i]
}
console.log(resultado)

//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let first = 0
let next = 1
for (let i = 0; i<10;i++){
    let aux = first + next
    first = next
    next = aux
    console.log(first)
}
*/
//10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let array = [5, 10, 40, 3, 48, 29]
let resultado = []
for (let i = 0; i<array.length;i++){
    if (array[i]>10){
        resultado.push(array[i])
    }
}
console.log(resultado)