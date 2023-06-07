//rewrite code using let and const and store owners name differently.  want owners name to appear as owner and pets name to appear as spot.
const ownersName = "John";
const age = 101;

function runForLoop(pets) {
    let petObjects = [];
    

    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] };
        let name;

         if (pets[i] === "cat") {
            name = "fluffy";
            hasCat = true;
        } else {
            name = "spot";
        }
        console.log("The pets name is: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log("mans name is: ", ownersName);
    
    return petObjects;
}

runForLoop(["cat", "dog"]);


//ARROW FUNCTIONS.
//1.rewrite the .map using an arrow function.
//origional code.
/*const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
*/
const carrots = ['bright orange', 'ripe', 'rotten'];

function mapVegetables(arr) {
    return arr.map(carrot => { 
        return {type: 'carrot', name: carrot}})    };

console.log(mapVegetables(carrots));

//2.re-write the .filter() callback function using an arrow function.
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
/*
function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}*/
function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly});
    };
console.log(filterForFriendly(people));

// 3. rewrite the following functions to be arrow function.
/*function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}*/
const a = 4;
const b = 3

const doMathSum = () => a + b;
console.log(doMathSum());

const produceProduct = () => a * b;
console.log(produceProduct());

//4. write a printString function that takes firstName, lastName and age as parameters and returns a string like the following.
// Hi Kat Stark, How does it feel to be 40.

const individual = {
firstName: "Kat",
lastName: "Stark",
age: 40 };

//es5 format.
//var printString = function(nameAndAge) { return 'Hi ' + nameAndAge.firstName + ' ' + nameAndAge.lastName + ', How does it feel to be ' + nameAndAge.age + '?';};
//console.log(printString(individual));

//es6 format.
let printString = (nameAndAge) => `Hi ${nameAndAge.firstName} ${nameAndAge.lastName}, How does it feel to be ${nameAndAge.age}?`;
console.log(printString(individual));


//extra credit part of assignment.
//use shorthand syntax to make the following filter take up one line. 
const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

/*function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}*/

//I added filteredArr as  I want to have it filter and display in the console.
const filterForDogs = arr => {const filteredArr = arr.filter(animal => animal.type === 'dog'); console.log(filteredArr);}; filterForDogs(animals);