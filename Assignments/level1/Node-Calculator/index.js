const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

var userName = readline.question("May I have your name? "); //uses question function from readline and assigns the name the user inputs to userName.
console.log("hi " + userName + " let's do some math calculations! ");    //displays the name entered and explains to the user what is going to take place.

let typeOfCalculation;  //calls typeofCalculation 

function calculationChoice(){   // declares calculationChoice function
    typeOfCalculation = readline.question("Alright " + userName + ", what type of calculation would you like to do: Add, Sub, Mul or Div?: ");  //asks user what type of calculation they want to perform.
    mathCalculations()  //calling the mathCalculations function.
}

function mathCalculations(){            // declares mathCalculation function to actual calculations can be completed.
    let result;                         // set result as a variable do results can be displayed and allows math to be completed.

    if (typeOfCalculation === 'Add') {              //allows typeOfCalculation function to be validated correctly and run.
        var firstNumber = readline.question("What is your 1st number? ");   //assigns input to firstNumber and stores input locally.
                var secondNumber = readline.question("what is your 2nd number? ");  //assigns input to secondNumber and stores input locally.
                result = Number(firstNumber) + Number(secondNumber);        // allows calculation to be completed and needs Number in front of object so addition can occur.
                console.log("The Result is: " + result);                    // displays results to console.
        } else if (typeOfCalculation === 'Sub')  {                                                  //if sub is true then subtraction object will run.
          var firstNumber = readline.question("What is the 1st number you would like to use: ");    //assigns input to first number and stores input locally.
          var secondNumber = readline.question("what is the 2nd number you would like to use: ");   //assigns input to second number and stores input locally.
                result = firstNumber - secondNumber;                                                //does the subtraction calculation.
                console.log("The Result is: " + result);                                            //shows calculation result on console.
        } else if(typeOfCalculation === 'Mul') {                                                    // if Mul is true then multiplication object will run.
            var firstNumber = readline.question("What is the 1st number you would like to use: ");  //assigns input to first number and stores input locally.
            var secondNumber = readline.question("what is the 2nd number you would like to use: "); //assigns input to seconde number and stores input locally.
                result = firstNumber * secondNumber;                                                //does the multiplication calculation
                console.log("The Result is: " + result);                                            //shows the results on the terminal.
        } else if(typeOfCalculation === 'Div') {                                                    //if Div is true then division object will run.
            var firstNumber = readline.question("What is the 1st number you would like to use: ");  //assigns input to first number and stores input locally.
            var secondNumber = readline.question("what is the 2nd number you would like to use: "); //assigns input to second number and stores input locally.
                result = firstNumber / secondNumber;                                                //does the division of the input.
                console.log("The Result is: " + result);                                            //displays the results on the console.
    } else {
        console.log('Please choose: Add, Sub, Mul or Div only: ')                                   //this is error message if correct choice not made.
            calculationChoice()                                                                     //this calls the calculationsChoice function to start again so user can continue.
         }
}

calculationChoice()
