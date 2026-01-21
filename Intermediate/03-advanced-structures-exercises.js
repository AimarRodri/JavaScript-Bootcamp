//1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let phrase = "Bienvenido a un ejemplo para un ejercicio"
let splitedPhrase = phrase.split(" ")
let upperPhrase = splitedPhrase.map(word => word.toUpperCase)
let lessLetterThan = splitedPhrase.filter(word => word.length<=6)
console.log(upperPhrase)
console.log(lessLetterThan)

//2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra solo los números pares

let numbers = [5, 3, 1, 18, 2, 7]
let numbersCube = numbers.map(number => number ** 3).filter(number => number % 2 == 0)
console.log(numbersCube)

//3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección



//4. Ordena un array de números de mayor a menor

let sortedArray = numbers.sort((a, b)=>a-b)
console.log(numbers.sort((a, b)=>a-b))

//5. Dados dos sets, encuentra la unión, intersección y diferencia entre ellos

let mySet1 = new Set([1, 2, 3, 4])
let mySet2 = new Set([3, 1, 6, 7])
let union = new Set([...mySet1, ...mySet2])
let intersection = new Set([...mySet1].filter(value => mySet2.has(value)))
let difference =  new Set([...mySet1].filter(value => !mySet2.has(value)))
console.log(intersection)
console.log(difference)
//6. Itera los resultados del ejercicio anterior

console.log(union.forEach(number => console.log(number)))
console.log(intersection.forEach(number => console.log(number)))
console.log(difference.forEach(number => console.log(number)))

//7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos

let person = new Map([
    ["name", "Aimar"],
    ["age", "20"],
    ["email", "rodriguezmarreroaimar@gmail.com"]
])

person.forEach((value, key)=> console.log(`${key}: ${value}`))

//8. Dado el map anterior, crea un arrray con los nombres

//9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

//10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuarios
