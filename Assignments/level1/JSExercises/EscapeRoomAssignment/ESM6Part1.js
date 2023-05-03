//ES6 Part 1.

//const and let variables.  These replace defining var.
//const is for a constant variable like a name.
var name = "steve";
const firstName = "joe";    //declaring firstName as a const variable ensures whatever is assigned does not change.
//firstName = "Steve";        //this trys to change firstName from joe to Steve. which can not be done.
console.log(firstName);     //get an error stating: TypeError: Assignment to constant variable.  just saying can not change from joe to steve.
let age = 12;               //assigns the number 12 to age and age is defined as a let variable - a variable that can be changed.

//types of scoping in javascript are: Global, local, bracket.
//Scope = Global is everything outside of a function. local is everthing inside a function.
//example of local scoping of a function.

//use let for any variable you know will be changing. such as numbers. use with for loops as data assigned to I always changes.
someFunc();

function someFunc(){    //we are using bracket scoping in this function.
    let a;              //as a is declared within the brackets only a needs to be after let and can be used anywhere inside the function.
    if(2 === 2){
        a = "hello";    //hello is being assigned to a.  a was declared under someFunc(), so only what is being assigned to a needs to be on this line.
    };
console.log(a);
};
//console.log(a); //trying to display the sum of a and calling this command outside of the function. This give the error message: ! referenceError: a is not defined.

//Spread and rest operators:
//syntax is: ...
//rest can only be uses in one reference which is:  rest is really gathers similar data.
function maxNumber(...nums){        //this gathers the data and puts into an array. when you see three ... inside a function paramater it is using the rest operator.
    console.log(nums);
};

maxNumber(0, 3, 58, 20, 200, 30);   //displays in the terminal as [ 0, 3, 58, 20, 200, 30 ].

//Spread Operator can be used on objects and arrays.  it takes the context of one data type and copies it and then puts it into a new object or array.
const colors1 = ["red", "blue"];
const colors2 = ["yellow", "green"];

const allColors = [...colors1, ...colors2];     //grabs the data from colors1 and colors2 and copies it and puts it into the new allColors array.
console.log(allColors);                         //displays all the colors in one array that has been combined together.

//another example:
const person = {
    name: "Rick",
    age: 50
};

const personCopy = person;      //assigns person to personCopy
console.log(personCopy);        //displays {name: "Rick", Age: 50} and this is a copy of variable person.

//template literals.
//"string"  we use to have to use "" or '' to identify as a string data type.
//if we wanted to combine (concantenate or concat) we use to have to code: "string" + "s" to get strings.

// if we had a variable of: const name = "joe"; and if we wanted to have a sentence that says hi joe. 
//we would have to code: "hi" + name;  this would combine the two to say hi joe.

//with `` we now would code: 
const newName = "Jeff";
const greeting = `hi ${newName}`           //the `` declares the string.
console.log(greeting);

//import and export  are used in other programs for web development. It is not used in node. 
//in node we use require(); to import data.
//in node we use module.exports(); to export data.