var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 105; i++) {
    clutter += `                <div class="bubble">${Math.floor(
      Math.random() * 10
    )}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      document.querySelector("#timer").textContent = --timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        ".pbtm"
      ).innerHTML = `<h1>Game Over ! You have scored ${score}.</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clickedBubble = Number(dets.target.textContent);
  if (clickedBubble === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
makeBubble();
runTimer();
getNewHit();
