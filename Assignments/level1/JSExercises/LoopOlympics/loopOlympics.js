
//Gold portion of Assignment.
//create a for loop that would change every number in the arrays to an X.


loopOlympicsAssignment();                                    //calls loopOlympicAssignment.


function loopOlympicsAssignment (){                         //trying to create a global function and an array to pass everything through so I only need to code one function.
    let printNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];      // assigns printNumbers as a variable and and holding numbers 0-9 in an array format.
    let fruit = ["banana", "orange", "apple", "kiwi"];      //list of types of fruits in string format and assinging it as an array to the variable fruit.
   
    // assignment preliminaries.
    //create a for loop that prints 0-9 and then reverses the numbers in the display terminal.
    //create a for loop that prints the list of fruits in the fruits array.

    let seqNum = "";                                        //sets the string value of seqNum to null.
    for (let i = 0; i < printNumbers.length; i++){          //gets the numbers from the printNumber array starting at 9 and going in sequential order.
        seqNum += printNumbers[i] + " ";                    //stores the numbers from the printNumber array in the local memory.
    }
    console.log("Sequential Order: ");                      //displays sequential string in the terminal windows on the line above the numbers.
    console.log(seqNum + '\n');                                    //displays the numbers from the printNumbers array sequentially in the terminal window.

    let revNum = "";                                        //sets the string value of revNum to null.
    for (let i = printNumbers.length - 1; i >= 0; i--){     //gets the numbers from the printNumber array starting at 9 and going backwards.
        revNum += printNumbers[i] + " ";                    //stores the numbers from the printNumber array in the local memory.
    }
    console.log("Reverse Order: ");                         //displays Reverse order string in the terminal.
    console.log(revNum + '\n');                                    //displays the numbers from the printNumbers array in the terminal in reverse format.

    let fruitList = [];
    for (let i = 0; i < fruit.length; i++){                 //obtains information from the fruit array.
        fruitList.push(fruit[i]);                           //displays the list of the fruit array in the terminal window.
    }
    console.log(fruitList + '\n');    


    //silver portion.
    //write a for loop that displays the names in the peopleArray.
    //write a for loop that pushes the names into a "name" array and an "occupation" array.
    //write a for loop that pushes every other name to an array starting with "Harrison Ford" and pushes every other occupation starting with "singer" to a different array.

    let peopleArray = [                                     //sets up peopleArray as a variable that holds string data as a name and as a occupation.
     {name: "Harrison Ford", occupation: "Actor"},          //assigns the string Harrison Ford to Name and the string data of Actor to occupation on this line, which will be 0.
     {name: "Justin Beiber", occupation: "Singer"},         //assigns the string data Justine Bieber to name and the string data of singer to occupation on this line, which will be 1.
     {name: "Vladimir Putin", occupation: "Politician"},    //assigns the string data Vladimir Putin to name and the string data of Politician to occupation on this line, which will be 2.
     {name: "Oprah", occupation: "Entertainer"}             //assigns the string date Oprah to name and the string data of Entertainer to occupation on this line, which will be 3
    ];

    let name = [];
    let occupation = [];
    for (let i = 0; i < peopleArray.length; i++){
        let person = peopleArray[i];
        if (i%2 === 0) {
            name.push(person.name);
        } else if (i%2 !== 0){
            occupation.push(person.occupation);  
            }
        console.log(person.name + " is an: " + person.occupation);
        }
    console.log("");    
    console.log(name + '\n');
    console.log(occupation + '\n');

   //bronze portion.
    //create a loop that pushes the numbers to an array.
    //write a for loop that displays the even number between 0 and 100 in the display terminal
    //write a for loop that pushes every other fruit from the list to an array.
    let matrix1 = [];                                           //assigns matrix1 as a variable with the value of Null.
    let matrix2 = [];                                           //assigns matrix2 as a variable with the value of Null.
    let matrix3 = [];                                           //assigns matrix3 as a variable with the value of Null.
    
    let row1 = [];                                              //assigns row1 as a variable with the value of Null.
    let row2 = [];                                              //assigns row2 as a variable with the value of Null.
    let row3 = [];                                              //assigns row3 as a variable with the value of Null.
    
    function matrixLoop(matrixNumbers){                         //defines matrixLoop as a function and is assigned the value of matricNumbers.
        console.log(matrixNumbers);                           //this was a test as log as matrixNumbers was not working properly.
                  
            for (let j = 0; j < matrixNumbers.length; j++){     //sets up the second matrix.
                row1.push(matrixNumbers[0]);                    //pushes data from matrixNumbers array into row 1.
                row2.push(matrixNumbers[0]);                    //pushes data from matrixNumbers array into row 2.
                row3.push(matrixNumbers[0]);                    //pushes data from matrixNumbers array into row 3.
            }
            matrix1.push(row1, row2, row3);                     //pushes rows 1 through 3 into the first matrix.
            row1 = [];                                          //first row in the matrix is being called and is equal to Null.
            row2 = [];                                          //second row in the matrix is being called and is equal to Null.
            row3 = [];                                          //third row in the matrix is being called and is equal to Null.

            for (let j = 0; j < matrixNumbers.length; j++){     //sets up the second matrix.
                row1.push(matrixNumbers[0]);                    //pushes data from matrixNumbers array into the first row and uses the first number in the array.
                row2.push(matrixNumbers[1]);                    //pushes data from matrixNumbers array into the second row and uses the second number in the array.
                row3.push(matrixNumbers[2]);                    //pushes data from matrixNumbers array into the third row and uses the third number in the array.
            }
            matrix2.push(row1, row2, row3);                     //pushes rows 1 through 3 into the second matric.
            row1 = [];                                          //first row in the matrix is being called and is equal to Null.
            row2 = [];                                          //second row in the matrix is being called and is equal to Null.
            row3 = [];                                          //third row in the matrix is being called and is equal to Null.

            for (let j = 0; j < matrixNumbers.length; j++){     //sets up the second matrix.
                row1.push(matrixNumbers[j]);                    //pushes data from matrixNumbers array into the 3 different matrices rows.
                row2.push(matrixNumbers[j]);                    //pushes data from matrixNumbers array into the 3 different matrices rows.
                row3.push(matrixNumbers[j]);                    //pushes data from matrixNumbers array into the 3 different matrices rows.
            }
            matrix3.push(row1, row2, row3);                     //pushes rows 1 through 3 into the third array.
            row1 = [];                                          //first row in the matrix is being called and is equal to Null.  
            row2 = [];                                          //second row in the matrix is being called and is equal to Null.  
            row3 = [];                                          //third row in the matrix is being called and is equal to Null.
         
        console.log(matrix1);                                   //should display the numbers from matrixNumbers in a matrix format with 3 rows.
        console.log(matrix2);                                   //should display the numbers from matrixNumbers in a matrix format with 3 rows.
        console.log(matrix3);                                   //should display the numbers from matrixNumbers in a matrix format with 3 rows.
    };

 
    let matrixNumbers = [0, 1, 2];                              //assigns the numbers 0,1,2 to matrixNumbers as an array.
    matrixLoop(matrixNumbers);                                  //assigns matrixNumbers to matrixLoop function and then sets it equal to matrices.
};