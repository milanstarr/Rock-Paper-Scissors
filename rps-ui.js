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
 

  if (userScore == 5) {
    endDisplay.innerHTML = 'Game over. You win!';
  } else if (computerScore == 5) {
    endDisplay.innerHTML = 'Game over. You lose!';
  }


  if (userScore == 5 || computerScore == 5) {
    //then button appears to restart game
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "new game";

    const newGameDiv = document.querySelector('div.new-game');
    newGameDiv.appendChild(newGameBtn);

    newGameBtn.style.backgroundColor = 'green';
    newGameBtn.style.borderColor = 'white';
    newGameBtn.style.fontSize = '35px';
    newGameBtn.style.padding = '20px 30px';
    newGameBtn.addEventListener('click', function(){
      window.location.reload();
    });
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

const btnsDiv = document.querySelector("div.btns");

btnsDiv.appendChild(rockBtn);


const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper!";
const handlePaperEvent = () => playRound("paper", computerPlay());
paperBtn.addEventListener("click", handlePaperEvent);

btnsDiv.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors!";
const handleScissorsEvent = () => playRound("scissors", computerPlay());
scissorsBtn.addEventListener("click", handleScissorsEvent);

btnsDiv.appendChild(scissorsBtn);

let pointsDisplay = document.getElementById("points");


let resultsDisplay = document.getElementById("results");


let endDisplay = document.getElementById("end");

//--------------------

paperBtn.style.backgroundColor = 'yellow';
paperBtn.style.borderColor = 'white';
paperBtn.style.fontSize = '35px';
paperBtn.style.margin = '15px'
paperBtn.style.padding = '20px 30px';


rockBtn.style.backgroundColor = 'pink';
rockBtn.style.borderColor = 'white';
rockBtn.style.fontSize = '35px';
rockBtn.style.padding = '20px 30px';

scissorsBtn.style.backgroundColor = 'orange';
scissorsBtn.style.borderColor = 'white';
scissorsBtn.style.fontSize = '35px';
scissorsBtn.style.padding = '20px 30px';



