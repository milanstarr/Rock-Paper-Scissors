"use strict";

const items = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;
let scoreStatement = "Current score: ";

function computerPlay() {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let lowerPlayerSelection = playerSelection
  
  if (lowerPlayerSelection == "rock" && computerSelection == "scissors") {
    pointsDisplay.innerHTML = "You win! rock beats scissors";
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "rock"
  ) {
    pointsDisplay.innerHTML = "You lose. rock beats scissors";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "rock") {
    pointsDisplay.innerHTML = "You win! paper beats rock.";
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "paper") {
    pointsDisplay.innerHTML = "You lose. paper beats rock.";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "paper"
  ) {
    pointsDisplay.innerHTML = "You win. scissors beats paper.";
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
  } else if (
    lowerPlayerSelection == "paper" &&
    computerSelection == "scissors"
  ) {
    pointsDisplay.innerHTML = "You lose. scissors beats paper.";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "rock") {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "paper") {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "scissors"
  ) {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
  }
 
// Question: how can I have the buttons disable at the end of game 
// without repeating the disabled buttons so many times? 
// i tried doing an 'else' but it didn't work... idk how to shorten
// this. 

  if (userScore == 5) {
    endDisplay.innerHTML = 'Game over. You win!';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore == 5) {
    endDisplay.innerHTML = 'Game over. You lose!';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } 
}


//-------------------------------------------------------------------------

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock!";

const handleRockEvent = () => playRound("rock", computerPlay());

rockBtn.addEventListener("click", handleRockEvent);

document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper!";
const handlePaperEvent = () => playRound("paper", computerPlay());
paperBtn.addEventListener("click", handlePaperEvent);

document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors!";
const handleScissorsEvent = () => playRound("scissors", computerPlay());
scissorsBtn.addEventListener("click", handleScissorsEvent);

document.body.appendChild(scissorsBtn);

let pointsDisplay = document.getElementById("points");

let resultsDisplay = document.getElementById("results");

let endDisplay = document.getElementById("end");

const startBtn = document.createElement("button");
startBtn.textContent = "start over";
// create a function where everything is cleared. 


