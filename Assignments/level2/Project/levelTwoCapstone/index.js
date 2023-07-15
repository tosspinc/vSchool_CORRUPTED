function clearList(){                                               /*declares clearList() as a function and clears the object being run. - added by instructor Zak Ward*/
  const el = document.getElementById("todo-list")                   /*el is a constant variable and and gets id todo-list and assigns it to el objext.*/
  while(el.firstChild) {                                            /*continues to loop/run as long as there is data in the firstChild element.*/
    el.removeChild(el.firstChild)                                   /*removes first data fro the el element.*/
  }
}

const todoList = document.getElementById("todo-list")               /*declares todoList as a constant variable and passes the todo-list object data to it.*/

console.log(todoList)                                               /*displays in the console data from the todoList object.*/

function getData() {                                                /*declares getData() as a function.*/
  clearList()                                                       /*calls clearList() function and clears out any local data from memory.*/
  axios.get("https://api.vschool.io/arnoldjones/todo")              /*calls data from my vschool profile*/
  .then(response => {                                               /*declares function*/
    for(let i = 0; i < response.data.length; i++){                  /*gets all data from vschool database and starts for loop*/
      const title = document.createElement('h2');                   /*declares title as variable and assigns to h2*/
      title.id = `title${response.data[i]._id}`;
      title.textContent = response.data[i].title;                   /*sets the content retrieved and assigns it to the title object.*/
      todoList.appendChild(title);                                  /*assigns data to html document in the body section.*/

      const id = document.createElement('h3');                      /*declares id as variable and assigns it to h3*/
      id.textContent = response.data[i]._id;                        /*sets the content retrieved and assigns it to the id object.*/
      todoList.appendChild(id);                                     /*assigns data to html document in the body section.*/
            
      const description = document.createElement('h4');             /*declares description as variable and assigns it to h4*/    
      description.textContent = response.data[i].description;       /*sets the content retrieved and assigns it to the description object.*/
      todoList.appendChild(description);                            /*assigns data to html document in the body section.*/
            
      const price = document.createElement('h4');                   /*declares price as variable and assigns it to h4*/
      price.textContent = response.data[i].price;                   /*sets the content retrieved and assigns it to the price object.*/
      todoList.appendChild(price);                                  /*assigns data to html document in the body section.*/
            
      const imgUrl = document.createElement('h4');                  /*declares imgUrl as variable and assigns it to h4*/
      imgUrl.textContent = response.data[i].imgUrl;                 /*sets the content retrieved and assigns it to the imgUrl object.*/
      todoList.appendChild(imgUrl);                                 /*assigns data to html document in the body section.*/
                
      const completedValue = document.createElement('h4');          /*declares completedValue as variable and assigns it to h4*/
      const completedButton = document.createElement('input');      /*declares completedButton as variable and assigns it to input*/
      completedButton.type = 'checkbox';                            /*defines checkbox type.*/
      completedButton.setAttribute('id', `completedButton${response.data[i]._id}`);
      completedButton.checked = response.data[i].completed;         /*sets the checked state of the checkbox in accordance to the data pulled from the server.*/
      completedValue.textContent = response.data[i].completed ? 'true' : 'false'; /*checks to see if completedValue is true or false.*/

      //when this code is here it shows only one entry and one check box.  
      //this is the first entry shown in the vschool database associated with my name.
      todoList.appendChild(completedValue);                         /*appends completedValue object which makes it a new element in the list.*/
      todoList.appendChild(completedButton);                        /*appends completedButton object.*/
      if (response.data[i].completed) {                             /*verifies if response from database is equal to false.*/
    //    title = document.getElementById(`title.${response.data[i]._id}`); /*retrieves an html element with the dynamic ID and assigns it to title.*/
        title.classList.add('completed');                           /*adds the css completed class to the title element. */
      }
     completedButton.addEventListener('change', () => completeRequest(response.data[i]._id))
    //   title = document.getElementById(`title${response.data[i]._id}`);  /*.*/
    }
    
    function completeRequest(id) {                        /*declares completeRequest as a function and passes id object to it.*/
      const title = document.getElementById(`title${id}`) /*retrieves html element with dynamic ID and assigns it to the title.*/      
      const completeButton = document.getElementById(`completeButton${id}`)
      
     if (completeButton.checked === true) {               /*verifies if the completeButton element is checked, if it is then runs following code*/
      title.classList.add('completed');                   /*assigns the css styling from the completed class to it.*/
      console.log("should be false")                      /*displays in the console "this should be false" if it is already checked.*/
      axios.put(`https://api.vschool.io/arnoldjones/todo/${id}`,{ "completed": false})  /*puts or sends data to vschool database related to my information.*/
        .then(res => getData())                           /*calls the getData() function.*/
        .catch(err => console.log(err))                   /*catches if there is an error and displays the error message.*/
      } else if (completeButton.checked === false){       /*verifies if checkbox is not checked and then runs following line of code.*/
      title.classList.add('completed');                   /*assigns the css styling from the completed class to it.*/
      console.log("should be true")                       /*displays in console message: "Should be true".*/
      axios.put(`https://api.vschool.io/arnoldjones/todo/${id}`,{ "completed": true})
        .then(res => getData())                           /*calls the getData() function.*/  
        .catch(err => console.log(err))                   /*catches if there is an error and displays the error message.*/
      }
    };

  //  const deleteButton = document.createElement('button');          /*declares deleteButton as a variable and assigns button to it.*/
  //  deleteButton.textContent = "DELETE";                            /*assigns the text Delete to the delete button.*/
  //  deleteButton.setAttribute = ("id", `${response.data[i]._id}`);

    //DELETE REQUEST
  //  const deleteRequest = function(id) {                            /*declares deleteReques as a variable and assigns id function data to it.*/
  //    axios.delete(`https://api.vschool.io/arnoldjones/todo/${_id}`)
  //      .then(response => {
  //      getData();                                                  /*calls the getData function.*/
  //    })
  //    .catch((error) => console.log(error.data));                   /*if an error occurs, the error message is displayed.*/
  //  };
  //  deleteButton.addEventListener("click", ()=> deleteRequest(response.data[i]._id));
  //  todoList.appendChild(deleteButton);
  })
}
getData();                                                          /*calls the getData function.*/

const toDoform = document.getElementById('todo-form')               /*declares toDoform as a variable and assigns data to html document.*/

document.getElementById('todo-form').addEventListener("submit", function(e){
  e.preventDefault()                                              /*stops webpage from refreshing.*/
  const newTodo = {                                               /*declares newTodo as a variable.*/
      title: toDoform.title.value,                                /*assigns the value in the title text box to title object.*/
      price: toDoform.price.value,                                /*assigns the value in the price text box to price object.*/
      description: toDoform.description.value,                    /*assigns the value in the  description text box to description object.*/
      imgUrl: toDoform.imgUrl.value,                              /*assigns the value in the  image text box to imgUrl object.*/
      completed: false                                            /*initial newTodo completion is set to false status.*/
  };
  
  axios.post("https://api.vschool.io/arnoldjones/todo", newTodo)  /*posts data to my vschool database file and assigns it to newTodo.*/
    .then(response => {
        getData(),                                              /*calls the getData function*/
        window.location.reload()                                /*loads the data to the browser.*/
    })
    .catch(error => console.log(error.data.title))              /*catches errors and displays the error.*/
});
  