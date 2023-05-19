let startTimerButton = document.getElementById("startTimerButton");
let count = document.getElementById("count");
let timerActivated = false;


function startTimer() {
    let timerCountDown = 20;
    setInterval(function() {
    timerCountDown--;
      if (timerCountDown >= 0) {
        count.textContent = 'Timer: ' + timerCountDown;
      }
      if (timerCountDown === 0) {
          gameOver();
      }
    }, 1000);
};

function gameOver() {
    
};

startTimerButton.addEventListener('click', (e) => {
   // clickMe.disabled = false;
    startTimerButton.disabled = true;
    localStorage.setItem("startDisabled", "true");
    startTimer();
});