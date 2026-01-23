// DOM -> Document Object Model

// DOM handling

// - Elements select

// Basic methods

const myElemmentsById = document.getElementById("id")

const myElemmentsByClass = document.getElementsByClassName("class")

const myElemmentsByTag = document.getElementsByTagName("tag")

// Modern methods

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph")

// - Elements handling

const title = document.getElementById("title")
title.textContent = "Hola, javascript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"

// - Attribute modification 

// Get the attribute
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Set attribute
link.setAttribute("href", "https://example.com")

// Attribute check

const hasTarget = link.hasAttribute("target")

// Remove attribute 

link.removeAttribute("target")

// - CSS classes interaction

const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// -  Creation and elimination of elements

// Creation

const newParragraph = document.createElement("p")
newParragraph.textContent= "Este es un nuevo párrafo creado desde js"
newParragraph.style.padding = "8px"

container.appendChild(newParragraph)
const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Specified insertion

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem)
itemsList.prepend(newItem)
secondItem.before(newItem)
secondItem.after(newItem)

// Remove

// Modern
newParragraph.remove()

// Traditional

const parent = newParragraph.parentElement
parent.removeChild(newParragraph)

// DOM elements


const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", ()=>{alert("Click!")})

// Common events

document.addEventListener("DOMContentLoader", () => {console.log("El DOM está completamente cargado")})

sendButton.addEventListener("mouseenter", ()=>{sendButton.style.backgroundColor = "green"})
sendButton.addEventListener("mouseleave", ()=>{sendButton.style.backgroundColor = "blue"})

const form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    //Código
})

