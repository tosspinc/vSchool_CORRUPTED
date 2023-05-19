const startTimerButton = document.getElementById('startTimerButton');   //declares startTimerButton as a constant variable and assigns it the object id from the html document called startTimerButton.
const totalClicksButton = document.getElementById('totalClicksButton'); //declares totalClicksButton as a constant variable and assigns it the object id from the html document called totalClicksButton.
const resetButton = document.getElementById('resetButton'); //declares resetButton as a constant variable and assigns it the object id from the html document called resetButton.
const count = document.getElementById('count'); //declares count as a constant variable and assigns it the object id from the html document called count.
let newDisplayTotalClicks = document.getElementById('displayTotalClicks'); ////declares newDisplayTotalClicks as a variable and assigns it the object id from the html document called displayTotalClicks.
let timerActivated = false;     //declares timerActivated as a variable and assigns the value of false to it.
let intervalID; //declares intervalID as a variable.
 
function displayTotalClicks() {                     //declares displayTotalClicks as a function.
    if (localStorage.getItem('startDisabled')) {    //gets the object called startDisabled and puts data into local memory.
        startTimerButton.disabled = true;           //declares startTimerButton as disabled and runs it.
    } else {
        startTimerButton.disabled = false;          //declares startTimerButtons as not being disabled.  
    };
    newDisplayTotalClicks.textContent = localStorage.getItem('totalClicksStorage');
};

function startTimer() {                     //declares the startTimer function.
    let timerCountDown = 15;                //sets timerCountDown to 15.
    intervalID = setInterval(function() {   //sets the setInterval and its function equal to intervalID.
    timerCountDown--;                       //subtracts one number from the timerCountDown object.
      if (timerCountDown >= 0) {            //validates that timerCountDown is greater than zero and if so then runs timerCountDown.
        count.textContent = timerCountDown; //assigns the value of TimerCountDown to count.
      }
      if (timerCountDown === 0) {           //validates that timerCountDown is equal to 0 and then when true runs gameOver() function.
          gameOver();                       //calls the gameOver function.
      }
    }, 1000);                               //1 second or 1000 milli-seconds.
};                                          //closes the startTimer function.

function gameOver() {               //declares function to end program.
    clearInterval(intervalID);      //clears out the local memory for intervalID.
};

startTimerButton.addEventListener('click', (e) => {
   startTimerButton.disabled = true;                    //defines startTimerButton as being disabled.
    localStorage.setItem("startDisabled", "true");      //verifies that startDisabled is actually disabled and if it is then run following line of code.
    startTimer();   //startTimer() function is run as long as startDisabled is true.
});

totalClicksButton.addEventListener('click', (e) => {
    if (count.textContent !== '0'){                     //validates that the content of count is not equal to zero.
    newDisplayTotalClicks.textContent = Math.floor(Number(newDisplayTotalClicks.textContent) + Number(1)); //access the text content of newDisplayTotalClicks and converts from a string to a number and rounds it to the nearest whole number then assigns it to a new instance of displayTotalClicks.
    localStorage.setItem('totalClicksStorage', newDisplayTotalClicks.textContent); //assigns the data information from newDisplayTotalClicks and assigns it to a key call totalClicksStorage. this can later be called by using getItem.
    displayTotalClicks();}      //calls or runs the function displayTotalClicks.
});

resetButton.addEventListener('click', (e) => {  //listens for when the reset button is clicked.
clearInterval(intervalID);                      //stops the recurring interval or function set by setInterval.
count.textContent = '15';                       //sets the value of the count element to the string value of 15.
newDisplayTotalClicks.textContent = '0';        //sets the value of the newDisplayTotalClicks element to the string value of zero.
startTimerButton.disabled = false;              //allows the startTimerButton to work as it is set to true.              
});                                             //closes the function.