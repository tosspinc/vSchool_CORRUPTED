//setTimeout is a higher order javascript function.
//setTimeout(function(){}, 1000);  the 1000 is equal to a second.  setTimeout(arg1, arg2)
//this would run the function called in argument 1 for a period of 1 second.

//setTimeout(function(){            //calls the function to run
//  console.log('Hello World');     //prints Hello World to the console.
//}, 1000);                         //tells the computer to run the object after 1 second or 1000 milli-seconds.


//setInterval is a higher order javascript function.

//setInterval(function(){           //calls the function to run.
//    console.log('Hello World');   //prints Hello World to the console.
//}, 1000);                         //tells the computer to run the object constantly after 1 second or 1000 milli-seconds.


// var intervalID = setInterval(function(){     //assigns the setInterval to the variable intervalID and calls the function to run.
//     console.log('Hello World');              //prints Hello World to the console.
// }, 1000);                                    //tells the computer to run the object constantly after 1 second or 1000 milli-seconds.

// 'Hello World'
// 'Hello World'
// 'Hello World'
// 'Hello World'                                //runs the interval for 8 seconds.
//clearInterval(intervalID);                    //this will clear or stop the function from running constantly.

//function sayHello(){                            //calls the function sayHello()
//   console.log('hello!');                       //displays Hello in the console.
//};                                              //closes the function.
 
//function stopSayingHello(){                     //calls the function stopSayingHello().
//   clearInterval(intervalID)                    //clears the interval.
//};                                              //closes the function
 
//var intervalID = setInterval(sayHello, 1000);   //declares intervalID as a variable and assigns setIntervall() function to it and executes the function to display Hello once every second on a continuous loop. 
 
//setTimeout(stopSayingHello,  6000);             //declares the java built in function called setTimeout() and runs the function stopSayingHello after 6 seconds. only allows the sayHello function to run for 6 seconds.  

const display = document.getElementById('time-display');  //declares display as a variable

function getTime(){                 //declares getTime as a function.
    const now = new Date();         //declares now as a constant variable and assigns a new instance of system date to it.
    const hour = now.getHours();    //declares hour as a constant variable and assign new instant of system hour to it.
    const min = now.getMinutes();   //declares min as a constant variable and assigns a new instant of the system getMinutes to it.
    const sec = now.getSeconds();   //declares sec as a constant variable and assigns a new instant of the system getSeconds to it.
    if(hour < 10){                  //validates if the hour is below the number ten.
        hour = `0${hour}`;          //when hour number is below 10 a zero is added before the numbers.
    } if (min < 10) {
        min = `0${min}`;            //when minutes numbers are below 10 a zero is added before the minutes number.
    } if (sec < 10) {
        sec = `0${sec}`;            //when seconds numbers are below 10 a zero is added before the seconds number.
    };

    display.textContent = `Current time is: ${hour}:${min}:${sec}`;     //display is used to display data to webpage.
};

setInterval(getTime, 1000);         //updates getTime every second.
 