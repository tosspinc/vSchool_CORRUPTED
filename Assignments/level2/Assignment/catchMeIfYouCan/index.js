//1a and b: write a function that returns the sum of two numbers. Throw and error if either argument is not a number data type.
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
console.log(sum(8, 3));  //displays the data of sum in the display. the data is the value of the two numbers. the first number is assigned to x and the second is assigned to y.

//2 a and b: write a function that calls a user name and a password as the parameters. throw and error if either of them do not match. If they match then log to the console "login successful!".

const user = {username: 'sam', password: '123abc'}; //declares user as a constant variable and assigns values of username and password to it. They have values already assined.

function login(username, password){ //declares a function called login and assign objects of username and password to it.
try {       //allows for the following block of code to be tested for errors.
    if (username !== user.username)     //if username is not equal to the value of user then it will give the error message on next line.
        throw new Error('User name does not exist.') //if validates above line of code displays the stated error message.
    if (password !== user.password) //verifies that password matches the already assigned value initially.
        throw new Error('Password is not correct')  //if already declared value for password does not match will give the stated error message.
        return 'login successful!'; //if username and password match the predefined value for login object then displays the directed message.
    } catch(e){ //captures the event of validating that the values from username and password correct or not.
        console.log(e); //displays to the console the appropriate message.
    };
};
console.log(login('sam', '123abc'));    //runs the data or value of sam and 123abc assigned to login. displays appropriate message.
console.log(login('matt', '123xyz'));   //runs the data or value of matt and 123xyz assigned to login. displays appropriate message.
