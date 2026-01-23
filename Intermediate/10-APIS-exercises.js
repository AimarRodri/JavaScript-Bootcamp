//1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
})

//2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/MoureDev")
    .then(response => {
        console.log(response => {
            if (!response.ok){
                throw Error(`Error HTTPS: ${response.status}`)
            }
            return response.json()
        })
    })
    .catch(error => {
        console.log("Error", error)
    })


//3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de las promesas

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
})
async function getPosts(){
    try {
        const call = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}
getPosts()

//4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost(){
    try {
        const newPost = {
            userId: 1,
            title: "Este es un titulo",
            body: "Este es un cuerpo"
        }
        const call = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {"Content-type": "Json"},
            body: JSON.stringify(newPost)
        })
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}
createPost()

//5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación)

async function changePost(){
    try {
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                userId: 1,
                title: "Este es un titulo",
                body: "Este es un cuerpo"
                }
            )
        })
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// changePost()

// //6. Realiza una petición PATCH para modificar únicamente uno o dos campus de un recurso existente

async function updatePost(){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({title: "Este será el nuevo título"})
        })
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// updatePost()

//7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost(){
    try{
        const call = await fetch("https://jsonplaceholder.typicode.com/posts/10",{method: "DELETE",})
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// deletePost()
//8. Crea una función que realice una solicitud GET ( la que quieras ) a OpenWeatherApp

async function getNowWeather(city){
    try{    
        const apiKey = "75472f45acec74e20f851a7f37ff4b24"
        const call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const data = await call.json()
        console.log(data)
    } catch (error){
        console.log(`Error: ${error}`)
    }
}
getNowWeather("Las Palmas de Gran Canaria")
//9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokeInfo(pokemon){
    try {
        const pokemonCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const pokemonData = await pokemonCall.json()
        console.log(pokemonData.species)
        const pokemonSpecies = await fetch(pokemonData.species.url)
        const speciesData = await pokemonSpecies.json()

        const evolveChainCall = await fetch(speciesData.evolution_chain.url)
        const evolveChainData = await evolveChainCall.json()
        console.log(evolveChainData)
    }catch (error){
        console.log(`Error: ${error}`)
    }
}

getPokeInfo("Charizard")
//10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API. 
