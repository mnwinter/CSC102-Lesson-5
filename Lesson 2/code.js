// Variables
var startTime, endTime;
var timerInterval;

// Elements
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var timerDisplay = document.getElementById("timerDisplay");
var ResultsDisplay = document.getElementById("ResultsDisplay")

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  // Reset the timer display
  timerDisplay.innerText = "3.000ms";

  // Disable the start button
  startBtn.disabled = true;

  // Start the countdown
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  // Clear the interval
  clearInterval(timerInterval);

  // Enable the start button
  startBtn.disabled = false;

  // Calculate the elapsed time
  endTime = new Date().getTime();
  var elapsedTime = (endTime - startTime) / 1000;

  // Check if the user stopped the timer on time
  if (elapsedTime > 3) {
    ResultsDisplay.innerText = "Try Again";
  }
  else if (elapsedTime > 2.75){
    ResultsDisplay.innerText = "Super Speed";
  }
  else if (elapsedTime > 2){
    ResultsDisplay.innerText = "Great Score";
  }
  else if (elapsedTime > 1){
    ResultsDisplay.innerText = "Getting Closer";
  }
  else if (elapsedTime > .05){
    ResultsDisplay.innerText = "To Soon";
  }
}

function updateTimer() {
  // Calculate the remaining time
  var currentTime = new Date().getTime();
  var remainingTime = 3 - ((currentTime - startTime) / 1000);

  // Check if the timer has reached zero
  if (remainingTime <= 0) {
    // Clear the interval
    clearInterval(timerInterval);
    
    // Enable the start button
    startBtn.disabled = false;

    return;
  }

  // Display the remaining time with three decimal places
  timerDisplay.innerText = remainingTime.toFixed(3);
}
