const readline = require("readline-sync")    /* uses readline sync module. */

for (i = 1; i < 101; i++) {             /* sets up the for loop for counting from 1 to 100 and incrementing each time by 1. */
    if (i % 15 === 0) {                 /* divides the number by 15 and checks for a remainder using %. checks to see if number evaluated is divisible by 15. it will also check to see if number is divisible by 3 or 5.  such as i % 15, i % 3 or i % 5. */
        console.log("FizzBuzz");        /* if number being evaluated is divisible by 15 then it will display FizzBuzz in place of the number. */
    } else if (i % 5 === 0) {           /* checks to see if number is divisible by 5. */
        console.log("Buzz");            /* if number being evaluated is divisible by five it will display the word buzz in place of the number. */
    } else if (i % 3 === 0) {           /* checks to see if the number is divisible by 3. */
        console.log("Fizz");            /* if number being evaluated is divisible by 3 then it will display Fizz in place of the number. */
    } else {                            /* displays each number not divisible by 3, 5 or 15 and displays that in the display. */
        console.log(i);                 /* displays numbers 1 through 100 and i increments and prints to the screen everything less than 101. */
    };
};