const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]; //declares officeItems as a variable and makes it an array with the data listed assigned to it. 
var count = 0;  // declares count as a variable and sets it to a value of zero.

for(var i = 0; i < officeItems.length; i++){    //this is the for loop for officeItems[] array.
    if (officeItems[i] === "computer") {        //if officeItems is absolutely equal to computer then it counts it.
        count++;                                //adds the number of times computer is found in the array and keeps it in the local memory also keeps looking for computer until there are on more iterations.
    }
}

console.log("The number of times computer appears in the officeItems array is:  " + count);  //displays number of times computer was accounted for in the array to the terminal.