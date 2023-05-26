const arr = [1, 3, 5, 2, 90, 20];
//1. sort lowest to highest numbers.
//const leastToGreatest = arr.sort(function(a, b){
//    return a - b;
//});

const leastToGreatest = arr.sort((a, b) => a - b);
console.log(leastToGreatest);

//2. sort highest to lowest.
//const highestToLowest = arr.sort(function(a, b){
//    return b - a;
//});

const highestToLowest = arr.sort((a, b) => b - a);
console.log(highestToLowest);

//3. sort a string that is highest to lowest characters.
const words = ["dog", "wolf", "by", "family", "eaten"];

//const lengthSort = words.sort(function(a, b){
//    return a.length - b.length;
//});

const lengthSort = words.sort((a, b) => a.length - b.length);
console.log(lengthSort);

//4. sort objects by age.

const objects = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

//5. const byAge = objects.sort(function(a, b){
//    return a.age - b.age;
//});

const byAge = objects.sort((a, b) => a.age - b.age);
console.log(byAge);

//6 Sort array by name.

const namesAndAges = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

//const byNames = namesAndAges.sort(function(a, b){
//  if(a.name < b.name){  //compares the first name spelling to the second names spelling. if the first names letters are lower in the alphabet than the second name then it puts that name in the 1st local memory spot and continues checking names in array.
//    return -1;   //displays names in the lowest chronilogical order.
//  } 
//  if (a.name > b.name)
//  {
//    return 1; // compares the second name to the first name for spelling. if the second name is lower chronologically by alphabet letter then it puts that name in the memory and moves on to the next one.
//  }; 
//  return 0; //if by chance two names are found to have the exact same spelling then it just puts them in order from array list as being displayed alphabetically doesn't matter.
//});

const byNames = namesAndAges.sort((a, b) => {if (a.name < b.name) {return -1} if (a.name > b.name) {return 1} return 0});
console.log(byNames); //displays names on console.