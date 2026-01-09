const btn = document.getElementById("timer-btn");
const text = document.getElementById("timer-text");

let interval;
let counter = 1;
let isActive = false;
let mode = "exercise" | "relax" | "final";

function startExercise() {
  if (isActive) {
    clearInterval(interval);
    isActive = false;
    btn.textContent = "Start Exercise";
    btn.className = "relax";
    text.textContent = "Exercise paused.";
  } else {
    isActive = true;
    btn.textContent = "Pause Exercise";
    btn.className = "hard-contract";
    text.textContent = `Exercise started. Count: ${counter}`;
    interval = setInterval(() => {
      counter++;
      text.textContent = `Exercise started. Count: ${counter}`;
    }, 1000);
  }
}

btn.addEventListener("click", startExercise);
