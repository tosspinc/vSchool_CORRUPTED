//1. turn an array of numbers into a total of all numbers.
const digits = [1, 2, 3];

// const total = digits.reduce(function(final, digit){
//     final += digit;
//     return final;
// });

const total = digits.reduce((final, digit) => {final += digit; return final; });
console.log(total);

//2. turn a array that has numbers in it into a long string.
const arrayOfNumbers = [1, 2, 3];

//const stringConcat = arrayOfNumbers.reduce(function(final, num) {
//    return final + num.toString();
//}, '');

const stringConcat = arrayOfNumbers.reduce((final, num) => {  //final is the accumlator and num represents each element in the array.
   return final + num.toString();
}, '');

console.log(stringConcat);

//3. turn the following array of voters into a count of how many people have voted.

voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const individualsVoted = voters.reduce(function(final, voter) {
    if(voter.voted === true){
        return final + 1;
    } else {
        return final;
    }
}, 0);

console.log(individualsVoted);

//es6 however doesn't make sense to write it this way as only removes word function due to long argument.
//const individualsVoted = voters.reduce((final, voter) =>{if(voter.voted === true){return final + 1} else {return final};});

//4. figure out how much it would cost to purchase everything at once. 

const wishList = [
    {title: 'Tesla Model S', price: 90000},
    {title: '4 carat diamond ring', price: 45000},
    {title: 'Fancy hacky Sack', price: 5} ,
    {title: 'Gold fidgit spinner', price: 2000},
    {title: 'A second Tesla Model S', price: 90000}
];

//const shoppingSpree = wishList.reduce(function(final, num){
//    return final + num.price;
//}, 0);

const shoppingSpree = wishList.reduce((final, num) => { return final + num.price}, 0);
console.log(shoppingSpree);

//5. flatten array in to a single array.
const flattenArr = [
['1', '2', '3'], 
[true], 
[4, 5, 6]
];

//const combineArr = flattenArr.reduce(function(final, combArray){
//    return final.concat(combArray);
//}, []);

const combineArr = flattenArr.reduce((final, combArray) => {return final.concat(combArray)}, []);
console.log(combineArr);

//6. return an object representing the results of the vote.
const individualVoters = [
    {name:'Phil' , age: 21, voted: true},
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function individualsVoting(individualVoters){
    const voterData = individualVoters.reduce((final, individualVoter) => {
    if (individualVoter.age > 17 && individualVoter.age < 26) {
            final.numYoungVotes += individualVoter.voted ? 1 : 0; //uses ternary (conditional) operator. The ? validates if the voted is true or false. If it is true it returns a 1 and adds the voter count to the numYoungVotes object. If it validates it as false then it will add the age to the numYoungPeople object.
            final.numYoungPeople++;
        } else if (individualVoter.age > 25 && individualVoter.age < 36) {
            final.numMidVotesPeople += individualVoter.voted ? 1 : 0; //uses ternary (conditional) operator. The ? validates if the voted is true or false. If it is true it returns a 1 and adds the voter count to the numMidVotesPeople object. If it validates it as false then it will add it to the numMidsPeople object.
            final.numMidsPeople++;
        } else if (individualVoter.age > 35 && individualVoter.age < 56) {
            final.numOldVotesPeople += individualVoter.voted ? 1 : 0; //uses ternary (conditional) operator. The ? validates if the voted is true or false. If it is true it returns a 1 and adds the voter count to the numOldVotesPeople object. If it validates it as false then it will add it to the numOldsPeople object.
            final.numOldsPeople++;
        };
        return final;
    }, { //this is the string array of voter data and how it is displayed in the console.
        numYoungVotes: 0, 
        numYoungPeople: 0, 
        numMidVotesPeople: 0, 
        numMidsPeople: 0, 
        numOldVotesPeople: 0, 
        numOldsPeople: 0
        });
    return voterData;
};    

const result = individualsVoting(individualVoters); //declares result as a constant variable and assigns the data held in the individualVoters object to the object called individualsVoting.
console.log(result);  //displays result object in the console.
// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/


//7. extra credit assignment.
var username = 'tosspinc';  //my github user name.
var repository = 'vSchool'; //my github vSchool repository name.

var request = new XMLHttpRequest(); //sets request as a variable and asks for new instance of httpRequest.
request.open('GET', 'https://api.github.com/repos/' + username + '/' + repository, true); //gets data from my username.

request.onload = function() {  //once it loads information it make a new empty function.
  if (request.status >= 0 && request.status < 400) { //requests data is within data logged instances on my gitHub account.
    var data = JSON.parse(request.responseText);  //parses the data received from gitHub server and assigns it to the variable of data.
    var watchersCount = data.watchers_count; //extracts the data assigned to watchers and assigns it to watchersCount variable.
    console.log('Number of watchers: ' + watchersCount); //displays number of watchers followed by the actual number counted.
  } else {
    console.error('Failed to fetch repository'); //if no access to gitHub server is authorized then this message appears.
  };
};


// if there is a network error then this function is run. 
request.onerror = function() {
  console.error('Request error');
};

request.send();     //sends the request to gitHub server.