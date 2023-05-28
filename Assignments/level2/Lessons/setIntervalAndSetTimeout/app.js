//there are two types of set functions.  SetInterval and setTimeout.

//setInterval calls a function on a repeat basis. (example: could run for a continous period that updates every second (1000 miliseconds).}
//setTimeout calls a function to start after a period of delay in time.  (example: wait for one second (1000 miliseconds) before it runs.)
// when these two functions are used there is also two additional functions that need to be used and they all operate off of the getElementById as they return an Id. that Id used wth setInterval would use clearInterval and use the same Id.  the setTimeout function would also require the clearTimeout function and use the same Id used for the setTimeout function.

const startBtn = document.getElementById('start');  //declares the variable startBtn and assigns the html id start to it.
const stopBtn = document.getElementById('stop');    //declares the variable stopBtn and assigns the html id stop to it.
const timer = document.getElementById('timer');     //declares the variable called timer and assigns the html id timer to it.

let count = 0;                  //declares a variable called count and assigns it the value of 0.
let intervalId = 0;             //declares a //variable called intervalId and assigns it a value of 0.
timer.textContent = count;      //assigns count to timer.
let newCount = 0;               //declares newCount as a variable and assigns the value of 0 to it.

function incrementTimer(){      //declares the function and names it incrementTimer().
    count++;                    //starts the counting. 
    timer.textContent = count;  //displays the number initially assigned to count in the timer display window.
};

startBtn.addEventListener('click', function(){
    intervalId = setInterval(incrementTimer, 1000);
});

stopBtn.addEventListener('click', function(){
clearTimeout(intervalId);       //stops the timer from incrementing. 
timer.textContent = newCount; //displays counter to zero.
});

