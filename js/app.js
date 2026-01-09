const btn = document.getElementById("timer-btn");
const text = document.getElementById("timer-text");

let interval;
let counter = 1;
let seconds = 0;
let isActive = false;
let mode = "relax"; // "relax", "hard", "final"

function resetApp() {
  clearInterval(interval);
  isActive = false;
  counter = 1;
  seconds = 0;
  mode = "relax";
  btn.className = "relax";
  text.textContent = "START";
}

function startExercise() {
  if (isActive) {
    resetApp();
    return;
  }

  isActive = true;
  mode = "hard";
  btn.className = "hard-contract";
  text.textContent = `${counter}/10`;

  interval = setInterval(() => {
    seconds++;

    if (mode === "hard" && seconds >= 5) {
      mode = "relax";
      seconds = 0;
      btn.className = "relax";
      text.textContent = `${counter}/10`;
    } else if (mode === "relax" && seconds >= 10) {
      if (counter < 10) {
        // Nästa knip
        counter++;
        mode = "hard";
        seconds = 0;
        btn.className = "hard-contract";
        text.textContent = `${counter}`;
      } else {
        mode = "final";
        seconds = 0;
        btn.className = "light-contract";
        text.textContent = "SISTA!";
      }
    } else if (mode === "final" && seconds >= 30) {
      // Helt klar
      resetApp();
      text.textContent = "DONE! AGAIN?";
    }
  }, 1000);
}

btn.addEventListener("click", startExercise);
