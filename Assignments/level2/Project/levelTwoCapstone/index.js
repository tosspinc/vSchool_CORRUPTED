axios.get("https://api.vschool.io/arnoldjones/todo")                /*calls data from my vschool profile*/
    .then(response => {                                             /*declares function*/
        for(let i = 0; i < response.data.length; i++){              /*gets all data from vschool database and starts for loop*/
            const title = document.createElement('h2')              /*declares title as variable and assigns to h2*/
            title.textContent = response.data[i].title              /*sets the content retrieved and assigns it to the title object.*/
            document.body.appendChild(title);                       /*assigns data to html document in the body section.*/
            const id = document.createElement('h3')                 /*declares id as variable and assigns it to h3*/
            id.textContent = response.data[i].id                    /*sets the content retrieved and assigns it to the id object.*/
            document.body.appendChild(id);                          /*assigns data to html document in the body section.*/
            const description = document.createElement('h4')        /*declares description as variable and assigns it to h4*/    
            description.textContent = response.data[i].description  /*sets the content retrieved and assigns it to the description object.*/
            document.body.appendChild(description);                 /*assigns data to html document in the body section.*/
            const price = document.createElement('h4')              /*declares price as variable and assigns it to h4*/
            price.textContent = response.data[i].price              /*sets the content retrieved and assigns it to the price object.*/
            document.body.appendChild(price);                       /*assigns data to html document in the body section.*/
            const imgUrl = document.createElement('h4')             /*declares imgUrl as variable and assigns it to h4*/
            imgUrl.textContent = response.data[i].imgUrl            /*sets the content retrieved and assigns it to the imgUrl object.*/
            document.body.appendChild(imgUrl);                      /*assigns data to html document in the body section.*/
            const completedValue = document.createElement('h4')     /*declares completedValue as variable and assigns it to h4*/
            completedValue.textContent = response.data[i].completedValue /*sets the content retrieved and assigns it to the completedValue object.*/
            document.body.appendChild(completedValue);              /*assigns data to html document in the body section.*/
            const completedActionTrue = {                           /*declares completedActionTrue as variable*/
                completed: true                                     /*sets completedValue to true*/
            }
        }
    })
    .catch(error => console.log(error))                              /*catches data if there is an error*/
