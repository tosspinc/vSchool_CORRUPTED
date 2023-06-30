function getData(){
    fetch("https://swapi.co/api/people")
        .then(res => res JSON())
        .then(res => console.log(res))
        .catch((err) => console.log(err))
}

getData()