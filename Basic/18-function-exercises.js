//1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b){
    return a + b
}
console.log(sum(5, 5))

//2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function higher(array){
    high = array[0]
    array.forEach((value) => {if(value>high){high=value}})
    return high
}
console.log(higher([3, 2, 5, 1, 20]))

//3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocals(string){
    let vocal = 0
    string = string.toLowerCase()
    for (let i = 0; i < string.length;i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
            vocal++
        }
    }
    return vocal
}
console.log(vocals("En un lugar de la mancha de cuyo nombre no quiero acordarme"))

//4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function upperArray(array){
    result = []
    array.forEach((string) => result.push(string.toUpperCase()))
    return result
}
console.log(upperArray(["En un lugar", "De la mancha", "De cuyo nombre"]))

//5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function prime(num){
    if (num%2!=0){return true}else{return false}
}
console.log(prime(8))

//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(array1, array2){
    result = []
    array1.forEach((Element) => array2.forEach((value) => {if (value==Element){result.push(Element)}}))
    return result
}
console.log(commonElements([1, 3, 5, 7, 8, 2], [2, 5 ,10, 23, 12, 1]))

//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function pairSum(array){
    result = 0
    array.forEach((value) => {if(value%2==0){result+=value}})
    return result
}
console.log(pairSum([2, 2, 3 ,6]))

//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function square(array){
    result = []
    array.forEach((value) => result.push(value**2))
    return result
}
console.log(square([2, 3, 4, 5, 6]))

//9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden

function orderedString(string){
    let words = string.split(" ")
    words.sort()
    return words.join(" ")
}
console.log(orderedString("En un lugar de la mancha"))

//10. Crea una función que calcule el factorial de un número dado

function factorial(number){
    result = 1
    for (let i = 2; i <= number;i++){
        result*=i
    }
    return result
}
console.log(factorial(5))