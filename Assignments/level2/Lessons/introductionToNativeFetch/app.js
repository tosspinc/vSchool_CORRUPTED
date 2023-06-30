// Fetch
// url: 'https://rickandmortyapi.com/api/character'

// how it works.
fetch("https://rickandmortyapi.com/api/character") 
    //method: 'get'
    //method: 'post',
    //body: JSON.stringify({})

    .then(res => res.json())
    .then(res => {
        for(let i = 0; i < res.results.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = res.results[i].name
            document.body.appendChild(h1)
        }
    })
    .catch(err => console.log(err))