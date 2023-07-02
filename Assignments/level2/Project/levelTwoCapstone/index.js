axios.get("https://api.vschool.io/arnoldjones/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const title = document.createElement('h2')
            title.textContent = response.data[i].title
            document.body.appendChild(title);
            const id = document.createElement('h3')
            id.textContent = response.data[i].id
            document.body.appendChild(id);
            const description = document.createElement('h4')
            description.textContent = response.data[i].description
            document.body.appendChild(description);
            const price = document.createElement('h4')
            price.textContent = response.data[i].price
            document.body.appendChild(price);
            const imgUrl = document.createElement('h4')
            imgUrl.textContent = response.data[i].imgUrl
            document.body.appendChild(imgUrl);
            const completedValue = document.createElement('h4')
            completedValue.textContent = response.data[i].completedValue
            document.body.appendChild(completedValue);
            const completedActionTrue = {
                completed: true
            }
        }
    })
    .catch(error => console.log(error))
