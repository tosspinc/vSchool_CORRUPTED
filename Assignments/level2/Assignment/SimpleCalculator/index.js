let calculatorInput = document.getElementById('calculatorInput');  //declares calculatorInput as variable and assigns calculatorInput data from webage to itself.
let buttons = Array.from(document.getElementsByClassName('buttons')); //declares buttons as a variable and stores data entered as an array.

buttons.forEach(button => {                     //each time a button is clicked it assigns that value to buttons.
    button.addEventListener('click', (e) => {   //listens for when a button is selected.
        let buttonText = e.target.value;        //declares buttonText as a variable and assigns the data from selected button to it.
        
        switch (buttonText) {                   
            case 'CE':
                calculatorInput.value = '';     //when the CE button is selected it removes or deletes the data that is in the textbox clearing it from memory.
                break;
            case 'C':                           //when the C button is selected it removes or deletes the data that is in the textbox clearing it from memory.
                calculatorInput.value = '';
                break;
            case 'Delete':                      //when the Delete button is selected it removes the last character in the string in the textbox.
                calculatorInput.value = calculator.value.slic(0, -1);       //when delete button is clicked it removes the last character entered. 
                break;
            case '=':
                try {
                    const result = evaluateExpression(calculatorInput.value);   //this evaluates the data that has been entered as a mathematical expression. 
                    calculatorInput.value = result;                             //displays the data after being evaluated in the text box.
                } catch (error) {                                               //collects data and if an error is determined it processes the next line of code.
                    calculatorInput.value = 'Error';                            //if an error was detected it will display error in the results textbox.
                }
                break;
            default:
                calculatorInput.value += buttonText;                            //this concatenates the data and displays it in the results textbox.
        }
    });
});

function evaluateExpression(expression) {
    let result = 0;
    
    // Addition
    if (expression.includes('+')) {                                 //checks to see if the + or addition symbol has been entered between data points entered. 
        const numbers = expression.split('+');                      //this splits the data entered into an array so it can be evaluated mathematically.
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);   //calculates the sum of the data assign to the numbers array. converts string to floating point number so it can be added.
    }
    // Subtraction
    else if (expression.includes('-')) {
        const numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);  
    }
    // Multiplication
    else if (expression.includes('x')) {
        const numbers = expression.split('x');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    }
    return result;
}

//possibly a better function.  try method looks for errors. Need to research to understand.
/*function calculateResult() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}*/