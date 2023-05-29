//1.a write a function that returns the sum of two numbers. Throw and error if either argument is not a number data type.
function sum(x, y){  //declares a function called sum and passes the values from x and y through it.
    try{        //try method.
        if(typeof(x) !== 'number')  //checks to see if x is a number. if it is not it will display the message below.
            throw new Error('This is not a number') //throws or displays the error message in the console.
        if (typeof(y) !== 'number')  //validates whether or not the value of y is a number.
            throw new Error('This is not a number') //if y is not a number the error message is displayed on the screen.
        return x + y;  //adds the value assigned to x and y together.
    }
    catch(e){   //catches the event or action of verifying if x and y are numbers and the event or action of adding them together.
        console.log(e);  //displays the data caught and assigned to e in the console.
    };
    
};
console.log(sum(5, 3));  //displays the data of sum in the display. the data is the value of the two numbers. the first number is assigned to x and the second is assigned to y.
