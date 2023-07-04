function getData() {
  axios.get("https://api.vschool.io/arnoldjones/todo")              /*calls data from my vschool profile*/
  .then(response => {                                               /*declares function*/
    for(let i = 0; i < response.data.length; i++){                  /*gets all data from vschool database and starts for loop*/
      const title = document.createElement('h2');                   /*declares title as variable and assigns to h2*/
      title.textContent = response.data[i].title;                   /*sets the content retrieved and assigns it to the title object.*/
      document.body.appendChild(title);                             /*assigns data to html document in the body section.*/

      const id = document.createElement('h3');                      /*declares id as variable and assigns it to h3*/
      id.textContent = response.data[i].id;                         /*sets the content retrieved and assigns it to the id object.*/
      document.body.appendChild(id);                                /*assigns data to html document in the body section.*/
            
      const description = document.createElement('h4');             /*declares description as variable and assigns it to h4*/    
      description.textContent = response.data[i].description;       /*sets the content retrieved and assigns it to the description object.*/
      document.body.appendChild(description);                       /*assigns data to html document in the body section.*/
            
      const price = document.createElement('h4');                   /*declares price as variable and assigns it to h4*/
      price.textContent = response.data[i].price;                   /*sets the content retrieved and assigns it to the price object.*/
      document.body.appendChild(price);                             /*assigns data to html document in the body section.*/
            
      const imgUrl = document.createElement('h4');                  /*declares imgUrl as variable and assigns it to h4*/
      imgUrl.textContent = response.data[i].imgUrl;                 /*sets the content retrieved and assigns it to the imgUrl object.*/
      document.body.appendChild(imgUrl);                            /*assigns data to html document in the body section.*/
                
      const completedValue = document.createElement('h4');          /*declares completedValue as variable and assigns it to h4*/
      completedValue.textContent = response.data[i].completedValue; /*sets the content retrieved and assigns it to the completedValue object.*/
      document.body.appendChild(completedValue);

      const completeButton = document.createElement('input');         /*declares completeButtons as a variable and assigns input data to it.*/
      completeButton.setAttribute("id", `completeButton${response.data[i]._id}`);
      completeButton.type = "checkbox";/*assigns data to html document in the body section.*/

                                   /*sets completeButtons as a checkbox.*/

    const completeRequest = function(id) {                          /*declares completeRequest as a variable and id as a function.*/
      if (`completeButton${response.data[i]._id}.checked`) {        /*if statement verifies that id is marked as checked.*/
         axios.put(`https://api.vschool.io/arnoldjones/todo/${id}`, completedActionTrue) /*adds data entry to my vschool database.*/
            .then(response => {                                   
                getData();                                          /*calls the getData function which pulls data from my vschool database file.*/
            })
            .catch(error => console.log(error.data));               /*if there is an error then it runs the following line of code.*/
      } else {
        console.log("Checkbox is not checked..");                   /*if there is an error displays this message.*/
      }
    };
    completeButton.addEventListener("change", () => completeRequest(response.data[i]._id));
    document.body.appendChild(completeButton);

    const deleteButton = document.createElement('button');          /*declares deleteButton as a variable and assigns button to it.*/
    deleteButton.textContent = "DELETE";                            /*assigns the text Delete to the delete button.*/
    deleteButton.setAttribute = ("id", `deleteButton${response.data[i]._id}`);

    //DELETE REQUEST
    const deleteRequest = function(id) {                            /*declares deleteReques as a variable and assigns id function data to it.*/
      axios.delete(`https://api.vschool.io/arnoldjones/todo/${_id}`)
        .then(response => {
            getData();                                              /*calls the getData function.*/
        })
        .catch(error => console.log(error.data));                   /*if an error occurs, the error message is displayed.*/
    };
    deleteButton.addEventListener("click", ()=> deleteRequest(response.data[i]._id));
    document.body.appendChild(deleteButton);
  }})
  .catch(error => console.log(error));
};
getData();                                                          /*calls the getData function.*/

const toDoform = document.toDoform;                                 /*declares toDoform as a variable and assigns data to html document.*/

toDoform.addEventListener("submit", function(e){
  e.preventDefault()                                              /*stops webpage from refreshing.*/
  const newTodo = {                                               /*declares newTodo as a variable.*/
      title: toDoform.title.value,                                /*assigns the value in the title text box to title object.*/
      price: toDoform.price.value,                                /*assigns the value in the price text box to price object.*/
      description: toDoform.description.value,                    /*assigns the value in the  description text box to description object.*/
      imgUrl: toDoform.imgUrl.value,                              /*assigns the value in the  image text box to imgUrl object.*/
      completed: false                                            /*initial newTodo completion is set to false status.*/
  };
  toDoform.title.value = "",                                      /*sets title data value to empty.*/
  toDoform.price.value = "",                                      /*sets price data value to empty.*/
  toDoform.description.value = "",                                /*sets description data value to empty.*/
  toDoform.imgUrl.value = ""                                      /*sets image url data value to empty.*/

  axios.post("https://api.vschool.io/arnoldjones/todo", newTodo)  /*posts data to my vschool database file and assigns it to newTodo.*/
    .then(response => {
        getData(),                                              /*calls the getData function*/
        window.location.reload()                                /*loads the data to the browser.*/
    })
    .catch(error => console.log(error.data.title))              /*catches errors and displays the error.*/
});
  