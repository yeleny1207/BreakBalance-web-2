let timer;
let timeLeft;
let isWorking = true;

function startTimer() {
  let workMin = parseInt(document.getElementById("work-time").value);
  let breakMin = parseInt(document.getElementById("break-time").value);
  let duration = isWorking ? workMin * 60 : breakMin * 60;
  timeLeft = duration;
  updateLabel();
  clearInterval(timer);
  document.getElementById("start-sound").play();

  timer = setInterval(() => {
    timeLeft--;
    updateLabel();
    if (timeLeft <= 0) {
      clearInterval(timer);
      isWorking = !isWorking;
      startTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timer-label").textContent = "⏱️";
  isWorking = true;
}

function updateLabel() {
  let min = Math.floor(timeLeft / 60);
  let sec = timeLeft % 60;
  document.getElementById("timer-label").textContent =
    (isWorking ? "Trabajo: " : "Descanso: ") + `${min}:${sec.toString().padStart(2, "0")}`;
}

function playBreath() {
  const circle = document.getElementById("circle");
  circle.style.display = "block";
  setTimeout(() => {
    circle.style.display = "none";
  }, 20000); // 20 segundos
}
