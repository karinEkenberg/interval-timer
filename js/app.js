const btn = document.getElementById("timer-btn");
const text = document.getElementById("timer-text");

let phase = 0; // 0 = Relax, 1 = Hard, 2 = Light (30s)
let timeLeft = 5;

function startExercise() {
  updateUI();
  const interval = setInterval(() => {
    timeLeft--;
    text.innerText = timeLeft;

    if (timeLeft <= 0) {
      nextPhase();
    }
  }, 1000);
}

function nextPhase() {
  phase++;

  if (phase === 1) {
    // Från Relax till Knip hårt
    timeLeft = 5;
    btn.className = "hard-contract";
    text.innerText = "SQUEEZE HARD";
  } else if (phase === 2) {
    // Slutklämmen: Knip lätt i 30 sekunder
    timeLeft = 30;
    btn.className = "light-contract";
    text.innerText = "LIGHT SQUEEZE";
  } else {
    // Klar!
    clearInterval(interval);
    btn.className = "relax";
    text.innerText = "DONE";
  }
}

function updateUI() {
  btn.className = "relax";
  text.innerText = "RELAX";
}

btn.addEventListener("click", startExercise, { once: true });
