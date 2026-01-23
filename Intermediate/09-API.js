// API -> Aplication Programming interface -> Protocols and rules that help us to communicate with other programs

// - APIs REST (HTTP + URLs + JSON(JavaScript Object Notation)) -> Most common 

// HTTP methods
// - GET -> Request for data
// - POST -> Send data
// - PUT  -> Send data to the server to update a resource
// - DELETE -> To del a resource

// Response codes HTTP:
// - 200 OK
// - 201 OK and resources modified or created
// - 400 EROR
// - 404 NOT FOUND
// - 500 SERVER'S ERROR (BACKEND)


// Use API -> This is a simple example of use, modify this code with async/await makes it better to understand and to control

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Transform response to JSON
        return response.json()
    })
    .then(data => {
        // Process or show data
        console.log(data)
    })
    .catch(error => {
        // Catch errors
        console.log("Error", error)
    })

// // Async/Await use
async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Error", error)
    }
}
getPosts()

// Post request

async function createPosts(){
    //Start try to control errors
    try{
        // Create a const with same structure as the json objects file
        const newPost = {
            userId: 1,
            title: "Este es un titulo",
            body: "Este es un cuerpo"
        }
        //Call the API with await to "wait" for the response, setting after the call the method (POST) cause now we want to creae a new post
        //header, which will set how we want the content to be, the most common and the one we will use is JSON, at last we set the body,
        //calling JSON.stringify to convert our const object into a json
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })        
        //Wait for response
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Error", error)
    }
}
createPosts()

//Tools for interact with the API -> postman - Apidog - vs extension(thunderClient)

// Error handling

fetch("https://jsonplaceholder.typicode.com/MoureDev")
    .then(response => {
        // Transform response to JSON
        console.log(response => {
            if (!response.ok){
                throw Error(`Error HTTPS: ${response.status}`)
            }
            return response.json()
        })
    })
    .catch(error => {
        // Catch errors
        console.log("Error", error)
    })

// Métodos HTTP adicionales
// - PATCH
// - OPTIONS

async function partialPostUpdate(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "This is my post's new title"})
        })        
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Error", error)
    }
}

// partialPostUpdate()

// Autentication by API key

async function getWeather(city){
    const apiKey = "75472f45acec74e20f851a7f37ff4b24"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    try {
        const response = await fetch(url)
        const data =  await response.json()
        console.log(data)
    } catch (error){
        console.log("Error", error)
    }
}
getWeather("Las Palmas de Gran Canarias")

// Other autetication and autoritation methods
// - Bearer Tokens
// - JWT

// APIs versioned
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras API's -> PokeAPI

async function getPokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const response = await fetch(url)
        const data =  await response.json()
        console.log(`Movimientos de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        });
    } catch (error){
        console.log("Error", error)
    }
}

getPokemon("Charizard")