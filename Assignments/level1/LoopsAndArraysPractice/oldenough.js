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

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {                 //establishes the for loop.
    var person = peopleWhoWantToSeeMadMaxFuryRoad[i];                           //declares person as a variable and assigns peopleWhoWantToSeeMadMaxFuryRoad to it.
    if (person.age >= 18) {                                                     //validates if person is 18 or older.
      console.log(person.name + " is old enough to see Mad Max Fury Road.");    //displays sentence in quotes and adds the persons name.
    } else {
      console.log(person.name + " is not old enough to see Mad Max Fury Road, don't let them in."); //if person is under 18 then it displays sentence with their name attached that are under 18.
    }
  }
   