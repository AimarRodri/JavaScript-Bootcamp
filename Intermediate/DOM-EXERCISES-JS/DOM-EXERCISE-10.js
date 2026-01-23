const myButton = document.getElementById("backgroundBtn")
myButton.addEventListener("click", ()=>{
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "red"
    }else{
        document.body.style.backgroundColor = "white"
    }
})