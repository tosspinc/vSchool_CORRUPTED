const form = document.addItem

var list = document.getElementById("list")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = form.title.value
    createNewItem(title)
    form.title.value = ""
})


function createNewItem(string){
    var listItem = document.createElement("li")
    var div = document.createElement("div")
    var edit = document.createElement("button")
    var x = document.createElement("button")

    list.append(listItem)
    listItem.append(div)
    div.textContent = string

    x.textContent = "X"
}

