//1. return an array that has only the numbers that are 5 or greater.
const arr = [2, 3, 6, 8];

// const fiveAndGreaterOnly = arr.filter(function(num){
//     if ( num > 5) {
//         return num;
//     };
// });
  // test
  const fiveAndGreaterOnly = arr.filter(num => num > 5);
  console.log(fiveAndGreaterOnly); /// [6, 8]

//2. return an array that includes only the even numbers.

//   const evensOnly = arr.filter(function(num) {
//             return num % 2 === 0;
//   });

const evensOnly = arr.filter(num => num % 2 === 0); //displays the even numbers.
//const evensOnly = arr.filter(num => num % 2); // displays the odd number 3.
  console.log(evensOnly);

//3. return an array that shows the words that are 5 characters or shorter in length.

const words = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];

//const fiveCharactersOrFewerOnly = words.filter(function(word){
//    return word.length <= 5; 
//});

const fiveCharactersOrFewerOnly = words.filter(word => word.length <=5); //displays dog, wolf, by and eaten.
//const fiveCharactersOrFewerOnly = words.filter(word => word.length >= 5); //displays family, eaten and camping.
console.log(fiveCharactersOrFewerOnly);

//4. return a new array that has filters out all of those who don't belong to the club.

const members = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
//regular javascript method.
//const peopleWhoBelongToTheIlluminati = members.filter(function(member){
//    return member.member === true;
//});
//console.log(peopleWhoBelongToTheIlluminati);

//es6 method.
const peopleWhoBelongToTheIlluminati = members.filter(member => member.member === true);
console.log(peopleWhoBelongToTheIlluminati);

//5. make a filtered list of all of the people who are old enough to see the Matrix.

const movieGoers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

//const ofAge = movieGoers.filter(function(movieGoer){
//    return movieGoer.age >= 18;
//});

const ofAge = movieGoers.filter(movieGoer => movieGoer.age >=18);
console.log(ofAge);