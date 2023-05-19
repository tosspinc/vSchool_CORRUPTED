//local storage
//persists when the page refresshes and closing of the browser.

//session storage
//removes itself when the browser closes.

//save as json: javascript object notation.
//getter ways to get information
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
const isAlive = localStorage.getItem('isAlive');
const friends = JSON.parse(localStorage.getItem('friends'));
const address = JSON.parse(localStorage.getItem('address'));
console.log(friends);


//setter ways to save local storage information and is an object.
localStorage.setItem('name', 'steve');
localStorage.setItem('age', 10);
localStorage.setItem('isAlive', true);
//the square brackets create an object in javascript and has a numberical reference for calling: 0, 1 , 2, etc.
localStorage.setItem('friends', JSON.stringify(['mark', 'tina', 'jay']));
//the curly brackets create an object in javascript.  converts data into a string and each object has a key: address is the key for holding the actual street address data. 
localStorage.setItem('address', JSON.stringify({street: '1149 W Hacienda', city: 'West Valley City', state: 'utah', zip: '84119'}));

//localStorage.removeItem('age');  //this will remove the key called age from local storage.

//using the following code accomplishes the same thing. however, you would need to declare the key.  
const dinosaur = "T-rex";
localStorage.dinosaur = 'T-rex';   //sets dinosaur as the key and assigns T-rex as the value.
console.log(localStorage.dinosaur);
