const readline = require("readline-sync");  //allows use readline-sync to be used so program doesn't require html or css files.

var userName = readline.question("May I have your name? "); //uses question function from readline and assigns the name the user inputs to userName.
console.log("hi " + userName + " let's do some math calculations! ");    //displays the name entered and explains to the user what is going to take place.

let typeOfCalculation;

function calculationChoice(){
    typeOfCalculation = readline.question("Alright " + userName + ", what type of calculation would you like to do: Add, Sub, Mul or Div?: ");
    mathCalculations()  //calling the mathCalculations function.
}

function mathCalculations(){
    let result;

    if (typeOfCalculation === 'Add') {
        var firstNumber = readline.question("What is your 1st number? ");
        var secondNumber = readline.question("what is your 2nd number? ");
                result = Number(firstNumber) + Number(secondNumber);
                console.log("The Result is: " + result);
        } else if (typeOfCalculation === 'Sub')  {
          var firstNumber = readline.question("What is the 1st number you would like to use: ");
          var secondNumber = readline.question("what is the 2nd number you would like to use: ");
                result = firstNumber - secondNumber;
                console.log("The Result is: " + result);
        } else if(typeOfCalculation === 'Mul') {
            var firstNumber = readline.question("What is the 1st number you would like to use: ");
            var secondNumber = readline.question("what is the 2nd number you would like to use: ");
                result = firstNumber * secondNumber;
                console.log("The Result is: " + result);
        } else if(typeOfCalculation === 'Div') {
            var firstNumber = readline.question("What is the 1st number you would like to use: ");
            var secondNumber = readline.question("what is the 2nd number you would like to use: ");
                result = firstNumber / secondNumber;
                console.log("The Result is: " + result);
    } else {
        console.log('Please choose: Add, Sub, Mul or Div only: ')
            calculationChoice()
         }
}

calculationChoice()

//function addNumbers(num1, num2) {
//    console.log('Ansqwer: ' +num1+num)
//}
