//resolve   - then
//reject    - catch

function flipCoin(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve('HEADS');
        } else if(randomNum === 1){
            reject('TAILS');
        }
    });
};

//flipCoin()
//    .then(response => console.log('RESOLVED: ' + response))
//    .catch(error => console.log('REJECTED: ' + error))

//    Promise.resolve('something').then(response => console.log(response));

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Hello World'), 3000);
    })
}

getData()
    .then(res => console.log(res))
    .catch(err => console.log(err))