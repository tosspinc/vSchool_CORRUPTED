const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const users = [
    {name: 'joe' },
    {name: 'julie'},
    {name: 'rick'}
];

// .forEach //will always return undefined.  always loop entire length of the array.
const newArr = [];
arr.forEach(function(num){          //never assign a variable for a .forEach.
    if(num % 2 === 0 && newArr.push(num));  //gets even numbers.
});

console.log(newArr); //displays the even numbers assigned to newArr.

// .find()   //returns the first item it finds in the array that matches the argument.
const result = users.find(function(user){
    //if(user.name[0] === 'j'){  //displays joe as joe is the first name in array that starts with j.
    if(user.name === 'julie'){  //displays julie as julie is in the array.
    return user;
    };
});
console.log(result);

// .findIndex()  //this will return the index of requested argument.
const userIndex = users.findIndex(function(user){
    //if(user.name === "rick"){         //returns the index number 2 as rick is the last name in the array and indexed at 2.
    //if(user.name === "joe"){          //returns the index number 0 as joe is the first name in the array and indexed at 0.
    if(user.name === 'julie'){          //returns the index number 1 as julie is the second name in the array and indexed at 1.
    return true;
    };
});

console.log(userIndex);