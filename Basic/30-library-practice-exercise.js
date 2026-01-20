// SISTEMA DE GESTIÓN DE BIBLOTECA

let library = [
    {
        id: "1",
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        year: 1967,
        gender: "Realismo mágico",
        available: true
    },
    {
        id: "2",
        title: "1984",
        author: "George Orwell",
        year: 1949,
        gender: "Distopía",
        available: false
    },
    {
        id: "3",
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        gender: "Fábula",
        available: true
    },
    {
        id: "4",
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        year: 1605,
        gender: "Novela",
        available: true
    },
    {
        id: "5",
        title: "Crónica de una muerte anunciada",
        author: "Gabriel García Márquez",
        year: 1981,
        gender: "Novela",
        available: false
    }
]

function searchByTitle(title){
    let result = null
    for (let book of library){
        if (book.title.toLowerCase() == title.toLowerCase()){
            result = book
            break
        }
    }
    if (result){
        return result
    }else{
        return "El libro no se encuentra en la librería"
    }
}

//Atento con poner bien el comparador
function booksByAuthor(author){
    let result = []
    for (let book of library){
        if (book.author === author){
            result.push(book)
        }
    }
    return result
}

//Uso el método filter() porque cuando el objeto book tenga available true, devolverá el libro.
function availableBooks(){
    return library.filter((book) => book.available)
}

function lendBook(id){
    for (let book of library){
        if(book.id == id && book.available == true){
            book.available = false
            return ("Felicidades, ya puedes disfrutar de tu libro!")
            break
        }else if (book.id == id && book.available == false){
            return ("Que pena, el libro ya está en préstamo.")
            break
        }
    }
    return "Lo lamentamos, su libro no se encuentra en la biblioteca"
    
}

function returnBook(id){
    for (let book of library){
        if (book.id == id){
            book.available = true
            return "Gracias por devolver el libro"
        }
    }
}

function agregarLibro(book){
    book.id = library.length+1
    library.push(book)
    return `Se ha ingresado el libro ${book.title} con el id ${book.id}`
}

function booksByGender(){
    let result = {}
    for (let book of library){
        if (result[book.gender]){
            result[book.gender] +=1
        }else{
            result[book.gender] = 1
        }
    }
    return result
}

function booksByOldes(){
    let result = library[0]
    for (let i = 0; i < library.length;i++){
        if (library[i].year < result.year){
            result = library[i]
        }
    }
    return result
}

console.log(booksByOldes())