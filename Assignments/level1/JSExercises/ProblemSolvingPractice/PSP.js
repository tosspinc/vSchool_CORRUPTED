const readline = require("readline-sync");

/* Part 1 */
/* directions: write a function that determines the highest number in an array of numbers and prints it to the display. Can not use Math.max() object. */

let setOfNumbers = [22, 58, 12, 76, 46, 5, 18, 3];          /* defines seOfNumbers as a variable that holds an array with 8 numbers in the array. */
let largestNumber = 0;                                      /* defines largestNumber as an variable and is initially set to 0. */

function findLargestNumber (num, large) {                   /* declares a function called findLargesNumber and has objects named num and large. */
    for (i = 0; i < num.length; i++) {                      /* declares the for loop. stores each number in memory as it increments through the setOfNumbers array. */
        if (num[i] > large) {                               /* the numbers are assigned to num and compares each number against the other and stores the highest number in memory . */
            large = num[i];                                 /* assigns the number that is determined to be the largest one to large. */
        };
    };
    console.log(large);                                     /* displays the largest number on the display screen that is listed in the array. */
}

findLargestNumber(setOfNumbers, largestNumber);             /* calls or initiates the function called findLargestNumber. */ 

/* part 2 */
/* write a function that takes an array of words and a special character that returns each word that has that special character in it. */

let words = ["B@by", "Z3us", "Bill", "B@byZ3us", "Cat", "Dog", "Mouse"];    /* defines words as a variable that holds an array of various words. */
let wordWithChar = [];                                                 /* defines wordWithCharacter as a variable and sets the variable up as an empty variable. */

function specialChar (wordsWithChar, string) {               /* declares specialChar as a function and has objects wordWithChar and string assigned to it. */
    for (i = 0; i < wordsWithChar.length; i++) {             /* declares for loop. stores words in memory. */
        if (wordsWithChar[i].includes("@")) {                /* evaluates each word in the words array and looks for the character @. */
            string.push(wordsWithChar[i]);                           /* once it finds a word with the @ character it assigns it to string. */
        };
    };
    console.log(string);                                    /* prints the object string, which has the word(s) with the @ character in it to the display. */
}

specialChar(words, wordWithChar);                           /* calls or initiates the function specialChar. */

/* part 3 */
/* write a function that takes a num1 and a num2 and returns whether num1 is divisible by num2. */

function divisible(num1, num2) {                            /* declares a function called divisible and assigns objects num1 and num2 to it. */
    if (num1 % num2 === 0 ) {                               /* declares if statement and compares num1 with num2 to determine if num1 is divisible by num2. */
        return true;                                        /* if num1 is divisible by num1 then the word true is displayed in the terminal. */
    } else {                                                /* else statement is run if num1 is determined to not be able to be divided by num2. */
        return false;                                       /* if num1 is not divisible by num2 then false it displayed in the terminal. */
    };
}

console.log(divisible(16, 4)) // => true                    /* data used for first set of numbers. */
console.log(divisible(27, 9)) // => true                    /* data used for seconde set of numbers. */
console.log(divisible(33, 6)) // => false                   /* data used for third set of numbers. */
