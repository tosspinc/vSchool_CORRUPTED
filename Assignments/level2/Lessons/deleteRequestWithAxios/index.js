//deletes a request of data using the specific data id.
//the data that was deleted was the fourth entry.
//axios.delete("https://api.vschool.io/arnoldjones/todo/64a0d5e278fe452c1149adeb")


// GET one
axios.get("https://api.vschool.io/arnoldjones/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))