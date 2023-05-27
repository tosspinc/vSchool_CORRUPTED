//1. reduce array of number into a sum of all of the numbers.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = nums.reduce(function(final, num){  //this needs two argument in the fuction to work. final is saved in variable.
    final += num;           //adds together all of the numbers in the array.
    return final;
}, 0);  //the 0 is the location or number that final needs to start at.
console.log(result1);       //displays the value of result1.

//2. reduce the users to an array of strings of the user's first and last names.
const users = [
    { fName: 'joe', lName: 'smithy'},
    { fName: 'tina', lName: 'johnson'},
    { fName: 'rick', lName: 'sanchez'}
];



const result = users.reduce(function(final, user){
    final.push(user.fName + " " + user.lName);
    return final;
}, []); //starts off at with an empty array.
console.log(result);

//3. reduce the array into a count of how many people voted.
const voters = [
    { name: 'steve', voted: 'true'},
    { name: 'janet', voted: 'true'},
    { name: 'rebecca', voted: 'false'},
    { name: 'harvey', voted: 'true'}
];

// const voteCount = voters.reduce(function(final, voter){
//     if(!voter.voted){
//         final++;
//     };
//     return final;
// //}, 0);

//console.log(voteCount);

//return an object that has a count of both those who voted and those who did not vote.

const voterObj = voters.reduce(function(final, voter){
    if (voter.voted){
        final.didVote++;
    } else {
        final.didntVote++;
    }
    return final;
}, {didVote: 0, didntVote: 0});

console.log(voterObj);