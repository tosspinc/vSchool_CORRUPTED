//this is for ESM6 part 2.

//fat arrow functions.
// function sum  is used to function declaration sum as a function name.
// function sum(){

//};

// const sum or let sum is a function expression where we use a variable.
// const sum2 = function(){     //this is where the variable is given a function.

//};  this is where the variable is given a function. 
// a fat arrow function allows us to rewrite the code for a function expression.
const word = "Fun";

const sum2ES6 = word => {  //this allows us to remove the word function and add the fat arrow => after the parenthesis.
    console.log('ES6 is ${sum2ES6}!');
    return word;
};

//from: addEventListener("click", function(){});

//to: addEventListener("click", () =>{});  or if it is only passing one method addEventListener("click", () =>);

//object literals
//builds objects out of variables.
const blue = "blue";
const green = "green";
const red = "red";

//what is needed is an object. this object we will call colors.
const colors = { blue, green, red };   //only need the words if previously declared as a variable type that is outside of the object and will create the key word pair.
console.log(colors);  //displays in termal blue: 'blue', green: 'green', red: 'red';

//object destructuring.
//will always have to use dot notation.
const user = {
    username: "Joe123",
    age: 20,
    _id: "f892jf2jf98j39fj"
};

const {username, age} = user;
console.log(age);

//when working with an array.
const names = ["john", "betty", "nick"];
const [item1, item2, item3] = names;        //this assigns item1 to 0 in names, item2 to 1 in names and item3 to 2 in names array.
console.log(item2);
console.log(item1);
console.log(item3);

//default parameters are used for functions.
function sum(a = 5, b = 10){
    return a + b;
}

console.log(sum());           //displays the sum of 15 as the inside parenthesis is empty so it uses the initial numbers assigned to a and b.
console.log(sum(7));        //this passes the number of 7 to the letter a replacing the number 5.
console.log(sum(7, 9));     //this passes the number of 7 to the letter a replacing the number 5. It also passes te number 9 to letter b replacing the number 10.