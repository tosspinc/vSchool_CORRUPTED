// get requests with axios.
//notes for help understanding - https://coursework.vschool.io/v-schools-todo-api-documentation/

// url: https://api.vschool.io/arnoldjones/todo

//get all - an array of items.  gets json data.

axios.get("https://api.vschool.io/arnoldjones/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))

//get one - a single item.
//axios.get("https://api.vschool.io/arnoldjones/todo/")
//    .then(response => console.log(response.data))
//    .catch(error => console.log(error))