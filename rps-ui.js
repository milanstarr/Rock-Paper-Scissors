"use strict";

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock!";

const handleRockEvent = () => playRound('rock', computerPlay());

rockBtn.addEventListener("click", handleRockEvent);

rockBtn.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper!";
paperBtn.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors!";
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

document.body.appendChild(scissorsBtn);
