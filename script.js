let input1 = document.querySelector(".input")


let botonAgregar = document.querySelector(".boton-agregar")


let container = document.querySelector(".container")

class item {
    constructor(tareaNueva){
        this.crearDiv(tareaNueva)
    }

    crearDiv(tareaNueva){
        let inputItem = document.createElement("input")
        inputItem.setAttribute("disabled" , true)
        inputItem.setAttribute("type" , "text")
        inputItem.classList.add("item-input")
        inputItem.value = tareaNueva
        let div1 = document.createElement("div")
        div1.classList.add("item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fa-solid fa-trash'></i>"
        botonRemover.classList.add("boton-remover")

        div1.appendChild(inputItem)
        div1.appendChild(botonEditar)
        div1.appendChild(botonRemover)
        container.appendChild(div1)

        botonEditar.addEventListener("click" , function() {
            inputItem.disabled = !inputItem.disabled
            if (inputItem.disabled == true){
                this.innerHTML = "<i class='fa-solid fa-lock'></i>"
            } else {
                this.innerHTML = "<i class='fas fa-lock-open'></i>"

            }
        })
        
        botonRemover.addEventListener("click" , function() {
            container.removeChild(div1)
        })
    }    
}

function chequearInput(input) {
    if (input.value) {
        let newObject = new item(input.value)
    } 
    input.value = ""  
}
botonAgregar.addEventListener("click", function () {
    chequearInput(input1)
} )
