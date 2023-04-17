//create a button that allows you to toggle between "lights on" and "light off" and will toggle a total of the addintion of the numbers in the array.
//I need to use the modulus operator and this will leave a remainder. this remainder is what I need to validate in my coding.


function sumTotal (arr){                    //declares sumTotal as a global function: data in array called as arr can be used several times througout program.
    let sum = 0;                            // this is an accumulator.
    for (let i=0; i < arr.length; i++){     //this calls the for loop for the array [arr] argument we are looking at.
        sum += arr[i];                      //The variable sum is adding the data in the array 
        }   
    if (sum % 2 === 0){                     //the modulus command (determines if there is a remainder) is being determined if it has a remainder once the arr data has been assigned to sum. 
        return "The light is on.";          //if the return value has a remainder of 0 then the message shown will be displayed in the terminal. 
    }   
    else {
        return "The light is off.";         //if the modulus command above determines the array data has a remainder then it returns the message assigned in the terminal.
    }
    
};
console.log(sumTotal([2, 5, 435, 4, 3]))    //this is passing the first set of array data through sumTotal and comparing it to sum and determining if there is a remainder.
console.log(sumTotal([1, 1, 1, 1, 3]))      //this is passing the second set of array data through sumTotal and comparing it to sum and determining if there is a remainder.
console.log(sumTotal([9, 3, 4, 2]));        //this is passing the third set of array data through sumTotal and comparing it to sum and determining if there is a remainder.
