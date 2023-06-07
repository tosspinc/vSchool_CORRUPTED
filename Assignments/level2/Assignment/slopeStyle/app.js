//1.return an array of animal no matter how many animals are passed through it.
//function collectAnimals() {
//  var animals = Array.prototype.slice.call(arguments);    //protype of the array structure. slice allows for conveting list of animals into the array.
//  return animals;
//};

function collectAnimals(...animals) {   //passes all arguments through it and returns the animals array.
    return animals;                     //returns the animals list as it is passed or assigned to collectAnimals.
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); //list of animals provided for array.
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));        //uses this list for collectAnimals and displays to the screen. displays: ['dog', 'cat', 'mouse', 'jackolope', 'platypus']

//2. write a function that returns a food object with the array names as properties.
function combineFruit(fruit, sweets, vegetables){       //combineFruit has three properties or objects for 3 categories of food.
    return {fruit, sweets, vegetables};                 //we are returning the three objects or properties as individual literals for each category.
};

console.log(combineFruit(["apple", "pear"],             //the first argument or array consisting of ["apple" and "pear"] 8s assigned or passed to the first object or property of the function combineFruit which is called fruit..
             ["cake", "pie"],                           //the second arguement or array consisiting of ["cake" and "pie"] are assigned or passed to the second object or property of the function combineFruit which is called sweets.
             ["carrot"]));                              //the third argument or array consisting of ["carrot"] is passed or assigned to third object or property of the function combineFruit which is called vegetables.
//commented out as this is added into the console.log line of code.
//=> {      
//        fruit: ["apple", "pear"],
//        sweets: ["cake", "pie"],
//        vegetables: ["carrot"]
//     };
//displays: fruit: ['apple', 'pear'], sweets: ['cake', 'pie'], vegetables: ['carrot']

//3. use destructuring method to use the property names a variables. Destructure the object in the parameter.
const location = 'Burly Idaho';
const duration = '2 weeks';
function parseSentence({location, duration}) {
    return (`we're going to have a good time in ${location} for ${duration}`)
}
//by declaring location and duration at beginning I do not need to add it in the console.log line of code.
//console.log(paresSentence({location: 'Burly Idaho', duration: '2 weeks'}));

console.log(parseSentence({location, duration}));

//4. use array destructuring to make the following code ES6:
//function returnFirst(items){
//      const firstItem = items[0]; //change this line to be es6. returns first item as it is at index 0 in array.
//      const firstItem = items[1]; //returns second item in array. located at index of 1 in array.
//      const firstItem = item[2];  //returns the third item in the array. located at index of 2 in array.
//      return firstItem;
//};

// //function returnFirst(items) {   
//     const [firstItem] = items;  //this returns the first item in the array. changed to es6 per example in assignment example notes.
//     return firstItem;
// };

// function returnFirst(items) {   
//     const [, firstItem] = items; //returns the second item in the array. the coma make it become the second index in array.
//     return secondItem;
// };

function returnFirst(items) {   
    const [, , firstItem] = items;  //returns the third item in the array. two commas move argument to third index in array.
    return firstItem;
}
console.log(returnFirst(['glove', 'baseball', 'bat']));     //declared variables at end instead of at the beginning.

//write destructuring code to assign variables that will help us return the expected string. also, change the string to be using template literals.

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitorial work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;        //declares first three arguments for first three favorite activities.
    return `My top three favorite activities are: ${firstFav}, ${secondFav}, ${thirdFav}`;  //uses temperate literals.
};

console.log(returnFavorites(favoriteActivities));   //displays to console first three favorite activities.

//use rest and spread to take several arrays with information and then combine them into one array.
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

function combineAnimals(...arr) {   //passes all of the arguments to combineAnimals.
    let allAnimalTypes = [].concat(...arr); //combines all of the arrays into one singel array (concatenates the data.).
    return allAnimalTypes;
}

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); //puts realAnimals data first, then magicalAnimals data and then mysteriousAnimals last in the array.
console.log(combineAnimals(mysteriousAnimals, magicalAnimals, realAnimals));    //puts mysteriousAnimals at the beginning of the array, magialAnimals in the middle and real animals at the end of the array.

//make the following function more es6y
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

function product(a, b, c, d, e) { let numbers = [a, b, c, d, e];  
    return numbers.reduce((acc, number) => acc * number, 1)};   //starts numbers at 1. if change the number after the comma to two then number mulitplication starts a 2 and = 240. if 0 then displays 0.

    console.log(product(1,2,3,4,5));

//make the following code more es6y. use at least both the rest and spread operators.
//function unshift (array, a, b, c, d, e){ 
//  return [a, b, c, d, e].concat(array);
//};

function unshift(array, ...elements) {
    return [...elements, ...array];
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = unshift(originalArray, 'a', 'b', 'c', 'd', 'e');
  

  console.log(newArray);
  
//write some destructuring code to help this function out. use the ES6 shorthand that helps make the syntax look less redundant to simplfy it.

//function populatePeople(names){
//    return names.map(function(name){
//        name = name.split(" ");
        // your code
//        return {
//            firstName: firstName,
//            lastName: lastName
//        }
//    })
//}

function populatePeople(names) {
    return names.map(name => {
      name = name.split(" ");
      const firstName = name[0];
      const lastName = name[1];
      return { firstName, lastName };
    });
  }
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));   //goes through each name in the array and then displays them by assigning the first name at 0 index  to the first name and the last name at the 1 index to first last name in the array. etc. the data is then displays in the console as shown below.
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]