const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

var userName = readline.question("May I have your name? "); //uses question function from readline and assigns the name the user inputs to userName.
console.log(`Alright ${userName}, let's do some math calculations! `);    //displays the name entered and explains to the user what is going to take place.

let typeOfCalculation;  //calls typeofCalculation 

function calculationChoice(){   // declares calculationChoice function
    typeOfCalculation = readline.question(`${userName}, what type of calculation would you like to do: Add, Sub, Mul or Div?: `);  //asks user what type of calculation they want to perform.
    mathCalculations()  //calling the mathCalculations function.
}

function mathCalculations(){            // declares mathCalculation function to actual calculations can be completed.
    let result;                         // set result as a variable so results can be displayed and allows math to be completed.

    if (typeOfCalculation === 'Add') {              //allows typeOfCalculation function to be validated correctly and run.
        var firstNumber = readline.question("What is your 1st number? ");   //assigns input from user to firstNumber and stores this input in local memory.
        var secondNumber = readline.question("what is your 2nd number? ");  //assigns input from user to secondNumber and stores this input local memory.
                result = Number(firstNumber) + Number(secondNumber);        // assigns data from firstNumber and secondNumber variables and does the math calculation, which requires Number before variables.
                console.log("The Result is: " + result);                    // displays the string data and the data assigned to the result variable on the console.
        } else if (typeOfCalculation === 'Sub')  {                                                  //if sub is true then subtraction object will run.
          var firstNumber = readline.question("What is the 1st number you would like to use: ");    //assigns input to first number and stores input locally.
          var secondNumber = readline.question("what is the 2nd number you would like to use: ");   //assigns input to second number and stores input locally.
                result = firstNumber - secondNumber;                                                //does the subtraction calculation and assigns data to result.
                console.log("The Result is: " + result);                                            //displays the results assigned to the result variable in the console.
        } else if(typeOfCalculation === 'Mul') {                                                    // if Mul is true then multiplication object will run.
            var firstNumber = readline.question("What is the 1st number you would like to use: ");  //assigns input to first number and stores input locally.
            var secondNumber = readline.question("what is the 2nd number you would like to use: "); //assigns input to seconde number and stores input locally.
                result = firstNumber * secondNumber;                                                //does the multiplication calculation and assigns data to result.
                console.log("The Result is: " + result);                                            //displays the results from the result variable and displays the data on the terminal.
        } else if(typeOfCalculation === 'Div') {                                                    //if Div is true then division object will run.
            var firstNumber = readline.question("What is the 1st number you would like to use: ");  //assigns input to first number and stores input locally.
            var secondNumber = readline.question("what is the 2nd number you would like to use: "); //assigns input to second number and stores input locally.
                result = firstNumber / secondNumber;                                                //does the division of the input and assigns data to result.
                console.log("The Result is: " + result);                                            //displays the results from the result variable on the console.
    } else {
        console.log('Please choose: Add, Sub, Mul or Div only: ')                                   //this is error message if correct choice not made.
            calculationChoice()                                                                     //this calls the calculationsChoice function to start again so user can continue.
         }
}

calculationChoice()
