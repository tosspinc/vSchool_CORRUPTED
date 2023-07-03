function getData() 
{
    axios.get("https://api.vschool.io/arnoldjones/todo")                 /*calls data from my vschool profile*/
        .then(response => 
            {                                              /*declares function*/
                for(let i = 0; i < response.data.length; i++)
                    {               /*gets all data from vschool database and starts for loop*/
                        const title = document.createElement('h2');              /*declares title as variable and assigns to h2*/
                        title.textContent = response.data[i].title;              /*sets the content retrieved and assigns it to the title object.*/
                        document.body.appendChild(title);                        /*assigns data to html document in the body section.*/
            
                        const id = document.createElement('h3');                 /*declares id as variable and assigns it to h3*/
                        id.textContent = response.data[i].id;                    /*sets the content retrieved and assigns it to the id object.*/
                        document.body.appendChild(id);                           /*assigns data to html document in the body section.*/
            
                        const description = document.createElement('h4');        /*declares description as variable and assigns it to h4*/    
                        description.textContent = response.data[i].description;  /*sets the content retrieved and assigns it to the description object.*/
                        document.body.appendChild(description);                  /*assigns data to html document in the body section.*/
            
                        const price = document.createElement('h4');              /*declares price as variable and assigns it to h4*/
                        price.textContent = response.data[i].price;              /*sets the content retrieved and assigns it to the price object.*/
                        document.body.appendChild(price);                        /*assigns data to html document in the body section.*/
            
                        const imgUrl = document.createElement('h4');             /*declares imgUrl as variable and assigns it to h4*/
                        imgUrl.textContent = response.data[i].imgUrl;            /*sets the content retrieved and assigns it to the imgUrl object.*/
                        document.body.appendChild(imgUrl);                       /*assigns data to html document in the body section.*/
                
                        const completedValue = document.createElement('h4');     /*declares completedValue as variable and assigns it to h4*/
                        completedValue.textContent = response.data[i].completedValue; /*sets the content retrieved and assigns it to the completedValue object.*/
                            document.body.appendChild(completedValue);               /*assigns data to html document in the body section.*/
                
                        const completedActionTrue = {                            /*declares completedActionTrue as variable*/
                            completed: true                                      /*sets completedValue to true*/
                        };
                
                    //checkbox for input
                  const completeButton = document.createElement('input');      /*declares completeButton as a variable and assigns input data to html document.*/
                  completeButton.setAttribute('id', `completeButton${response.data[i]._id}`)
                  completeButton.type = 'checkbox';                            /*defines completeButton as a checkbox.*/
    
                    //put request 
                  const completeRequest = function(id) 
                    {                       /*declares completeRequest as a variable*/
                      if(`completeButton${response.data[i]._id}.checked`)
                        {             /*validates if completeButton is checked*/
                          axios.put(`https://api.vschool.io/arnoldjones/todo/${id}`, completedActionTrue) /*if completeButton is checked then this line runs.*/
                          .then(response => 
                            {
                              getData(),                                               /*gets data from vschool server.*/
                              window.location.reload();                                /*refreshes website and loads data.*/
                            })
                            .catch(error => console.log(error.data));               /*catches if errors found.*/
                            }else 
                            {
                          console.log('checkbox is not checked...');                  /*displays error if checkbox was not checked.*/
                            };
                        };
                  completeButton.addEventListener('change', () => completeRequest(response.data[i]._id));
                  document.body.appendChild(completeButton);                          /*adds data from completeButton submission to web document.*/

                    //delete request
                  const deleteButton = document.createElement('button');              /*declares deleteButton as a variable and button is created on page.*/
                  deleteButton.textContent = 'Delete';
                  deleteButton.setAttribute = ('id', `deleteButton${response.data[i]._id}`);
                  const deleteRequest = function(id) 
                    {                                /*declares deleteRequest as a variable.*/
                        axios.delete(`https://api.vschool.io/arnoldjones/todo/${id}`)   /*deletes specific id from my folder on vschool database.*/
                        .then(response => 
                        {
                          getData(),                                              /*gets the data from my folder on vschool server.*/
                          window.location.reload();                               /*refreshes webpage and loads data to it.*/
                        })
                      .catch(error => console.log(error.data));                   /*catches errors in data.*/ 
                    };
                  deleteButton.addEventListener('click', () => deleteRequest(response.data[i]._id));
                  document.body.appendChild(deleteButton);                        /*refreshes data for deleteButton on webpage.*/
                }
            })   
    .catch(error => console.log(error.data));

    getData();
    
    const toDoForm = document.toDoForm;                                 /*declares todoForm as a variable*/
    
    toDoForm.addEventListener("submit", function(e){                    /*todo form add event listener for submitting information with an empty event function.*/
        e.preventDefault();                                             /*stops the website from refreshing.*/
        const newtoDo = {                                               /*creates a new todo event*/
            title: toDoForm.title.value,                                /*assigns the data entered in title text box to the title object*/
            price: toDoForm.price.value,                                /*assigns the data entered in price text box to the price object*/
            description: toDoForm.description.value,                    /*assigns the data entered in description text box to the description object*/
            imgUrl: toDoForm.imgUrl.value,                              /*assigns the image url entered in the text box to the imgUrl object*/
            completed: false                                            /*sets initial status for completion to false until the submit button is selected.*/
        };

        toDoForm.title.value = "",                                      /*sets the initial data for title to be an empty string*/    
        toDoForm.price.value = "",                                      /*sets the initial data for price to be an empty string*/
        toDoForm.description.value = "",                                /*sets the initial data for description to be an empty string*/
        toDoForm.imgUrl.value = ""                                      /*sets the initial value for an image to be an empty*/
    
        axios.post("https://api.vschool.io/arnoldjones/todo", newtoDo)  /*posts data to the vschool server under my name*/
        .then(response => {
            getData(),                                              /*calls the getData function.*/
            window.location.reload()                                /*reloads data to the webpage.*/
        });
    })
    .catch(error => console.log(error.data.title));             /*catches any errors and displays the error data.*/
};

