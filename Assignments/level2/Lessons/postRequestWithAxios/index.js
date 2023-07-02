// Post request inserts data into a database.

// Request Body



//const todoForm = document.todoForm

//todoForm.addEventListener("submit", function(event){
//    event.preventDefault()

//    const newTodo = {
//        title: todoForm.title.value,
//        description: todoForm.description.value,
//        imgUrl: todoForm.imgUrl.value
//    }
    
//    axios.post("https://api.vschool.io/arnoldjones/todo", newTodo)   //axios converts to json.
//    .then(response => console.log(response.data))
//    .catch(error => console.log(error))
//})

axios.get("https://api.vschool.io/arnoldjones/todo")
    .then(res => console.log(res))
    .castch(err => console.log(err))







// GET all todos
// axios.get("https://api.vschool.io/arnoldjones/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))