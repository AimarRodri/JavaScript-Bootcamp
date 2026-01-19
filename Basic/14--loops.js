//Loops o bucles

// for

for (let i = 0;i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i<numbers.length;i++){
    console.log(`Elemento: ${i}`)
}

//while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

//do while

do {
    console.log(`Hola ${i}`)
    i++
}   while(i<5)

//for of
myArray=[1, 2, 3, 4, 5]

mySet = new Set(["Aimar", "Rodríguez", "Marrero", 20, true])

myMap = new Map([
    ["name", "Aimar"],
    ["email", "rodriguezmarreroaimar@gmail.com"],
    ["age", 20]
])


for (let valor of myArray){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

//Buenas prácticas

for (let i = 0; i < 10; i++){
    if (i==5){
        continue
    }else if (i==7){
        break
    }
    console.log(i)
}