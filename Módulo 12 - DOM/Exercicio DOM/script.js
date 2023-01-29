function saveCasa(){
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², numero " + number + "(" + neighborhood + " - " + city + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeCasa(this")

    newListValue.appendChild(removeButton)

    document.getElementById("lista-casa").appendChild(newListValue)
}

function removeCasa(){
    let liToRemove = button.parentNode
    document.getElementById("lista-casa").removeChild(liToRemove)
}