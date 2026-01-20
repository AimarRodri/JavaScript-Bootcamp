// Exportación de módulos

import { useDeferredValue } from "react"

export function add(a, b){
    return a + b
}

console.log(add(5,10))

// Propiedades
export const Pi = 3.1316
export let name = "Aimar"

//Exportación por defecto

export default function substraction(a, b){
    return a - b
}