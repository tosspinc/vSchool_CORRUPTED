// PUT request with axios

//this changes the string of text data in the entry using the following id.
const updates = {
    title: "I changed the title!!",
    description: "I changed the description..."
}

axios.put("https://api.vschool.io/arnoldjones/todo/648a69dd78fe452c1149970f", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))




// GET 
//axios.get("https://api.vschool.io/arnoldjones/todo")
//    .then(res => console.log(res))
//    .catch(err => console.log(err))   