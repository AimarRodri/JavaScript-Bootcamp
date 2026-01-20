let numeros = [3, -2, 0, 15, -7, 0, 8]
let totalNumeros = numeros.length, positivos = 0, negativos = 0, ceros = 0, sumaNumeros = 0, mayor=numeros[0], menor=numeros[0]
for (let i = 0; i<numeros.length;i++){
    if (numeros[i]<0){
        sumaNumeros+=numeros[i]
        negativos++
    }else if (numeros[i]>0){
        sumaNumeros+=numeros[i]
        positivos++
    }else{
        sumaNumeros+=numeros[i]
        ceros++
    }
    if (numeros[i]>mayor){
        mayor=numeros[i]
    }else if (numeros[i]<menor){
        menor=numeros[i]
    }
}
console.log(`Hay ${totalNumeros} números en el array`)
console.log(`Hay ${positivos} números positivos, ${negativos} números negativos y ${ceros} ceros`)
console.log(`La suma de todos los números es ${sumaNumeros}`)
console.log(`El número mayor es ${mayor} y el número menor es ${menor}`)



let usuarios = ["ana", "luis", "ana", "pedro", "maría", "luis" ]
let usuarioBuscado = "pedro"
let usuariosTotalesSet = 0
let usuariosSet = new Set(usuarios)
console.log(usuarios.length)
console.log(usuariosSet)
console.log(usuariosSet.size)
console.log(usuariosSet.has(usuarioBuscado))

