const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

const peopleWhoWantToSeeMadMaxFuryRoad = [      //declares peopleWhoWantToSeeMadMaxFuryRoad as a variable and an array.
   {                    //first object in the array
    name: "Mike",       //first name of person in array
    age: 12,            //age of first person in array
    gender: "Male"      //gender of first person in array
   },
   {                    //second object in the array.
    name: "Madeline",   //name of person in second object. 
    age: 80,            //age of person in second object.
    gender: "Female"    //gender of person in second object.
   },
   {                    //third object in array.
    name: "Cheryl",     //name of person in third object.
    age: 22,            //age of third person
    gender: "female"    //gender of third person.
   },
   {
    name: "Sam",
    age: 30,
    gender: "Male"
   },
   {
    name: "Suzy",
    age: 4,
    gender: "Female"
   }
];

for(i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){         //declares start of for loop.
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {            //checks to see which individuals are equal to or over 18 and stores to local memory.
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");   //if equal to or over 18 displays message and name to console.
            } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {  //checks to see which individuals are under the age of 18 and stores to local memory.
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")    //if under 18 displays message and name to console.
            }
    };
