const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

var = oldEnough();

const peopleWhoWantToSeeMadMaxFuryRoad = [
   {   
    name = "Mike",
    age = 12,
    gender = "Male"
   },
   {
    name = "Madeline",
    age = 80,
    gender = "Female"
   },
   {
    name = "Cheryl",
    age = 22,
    gender = "female"
   },
   {
    name = "Sam",
    age = 30,
    gender = "Male"
   },
   {
    name = "Suzy",
    age = 4,
    gender = "Female"
   }
];

for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough");
    } else {
        console.log("not old enough")
    }
};


