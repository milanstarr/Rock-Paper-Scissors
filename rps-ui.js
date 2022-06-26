"use strict";

const items = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let lowerPlayerSelection = playerSelection.toLowerCase();
  if (!items.includes(lowerPlayerSelection)) {
    return "That doesn't work. Please type in a valid move.";
  }

  if (lowerPlayerSelection == "rock" && computerSelection == "scissors") {
    pointsDisplay.innerHTML = "You win! rock beats scissors";
    return winRound;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "rock"
  ) {
    console.log("You lose. rock beats scissors");
    return loseRound;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "rock") {
    console.log("You win! paper beats rock.");
    return winRound;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose. paper beats rock.");
    return loseRound;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "paper"
  ) {
    console.log("You win. scissors beats paper.");
    return winRound;
  } else if (
    lowerPlayerSelection == "paper" &&
    computerSelection == "scissors"
  ) {
    console.log("You lose. scissors beats paper.");
    return loseRound;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "rock") {
    console.log("It's a tie!");
    return tieRound;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "paper") {
    console.log("It's a tie!");
    return tieRound;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "scissors"
  ) {
    console.log("It's a tie!");
    return tieRound;
  }
}

/*
Below, I am defining a 'round enum'. 
I am using the const declaration (instead of let) because the value of 
winRound,loseRound, and tieRound will not change. The purpose of these 
variables is to represent state (specifically the state of a round that is 
won, lost, or tied). The value that is assigned to these enum variables are 
arbitrary. all that matters is that the values are different. The value
of the const variables can be integers, strings, char, etc.... it doesn't
matter. it's just like a placeholder for a state (as mentioned earlier). 

    */

const winRound = "win";
const loseRound = "lose";
const tieRound = "tie";

/* question
why does game() not have any parameters? I know that it is an anonymous function. 
I know that anonymous functions work if the parameters are defined within the function. 
but preeya asked me, "why doesn't this have any parameters?" and I didn't really know
how to answer. I don't fully understand why. 
    */

function game() {
  let roundCount = 0;
  let roundStatement = "Round: " + roundCount;

  let userScore = 0;
  let computerScore = 0;
  let scoreStatement = "Current score: ";

  /* question:
      below I have if, else if, and then else. for my else statement (line 129) I just put something random, because
      I thought i had to have an else if I use an 'if' statement. is this not right? do I not
      need the else statement? I feel like I remember you saying that i don't really need it, so I wonder if 
      I understood correctly. same for line 151.
      */

  console.log(`Current Score: ${userScore}, ${computerScore}`)
  /*<div class="score">
    Current Score: `${userScore}, ${computerScore}`
  </div>; */
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt(
      "Make your move: rock, paper, or scissors?"
    );
    //I want to update the console.log below, so that I can display
    // the round statement/count on the pointsDisplay.
    console.log(roundStatement + ++roundCount);
    /* <div class="rounds">
      `${roundStatement} + ${++roundCount}`
    </div>; */

    let roundStatus = playRound(playerSelection, computerPlay());
    if (roundStatus == winRound) {
      console.log(scoreStatement + ++userScore + ',' + computerScore);
      /*<div class="rounds">
        `${scoreStatement} + ${++userScore} + ',' + ${computerScore}`
      </div>; */
    } else if (roundStatus == loseRound) {
      console.log(scoreStatement + userScore + ',' + ++computerScore);
     
    } else if (roundStatus == tieRound) {
      console.log(scoreStatement + userScore + "," + computerScore);
      /*<div class="rounds">
        `${scoreStatement} + ${userScore} + ',' + ${computerScore}
      </div>; */
    } else {
      console.log("woohoooooooo");
    }
  }

  for (let i = 0; (i == 6); i++) {
    if (userScore > computerScore) {
      console.log(
        "Game over. You win! Final Score: " + userScore + "," + computerScore
      );
    } else if (userScore < computerScore) {
      console.log(
        "Game over. You lose. Final Score: " + userScore + "," + computerScore
      );
    } else if (userScore == computerScore) {
      console.log(
        "Game over. It was a tie. Final Score: " +
          userScore +
          "," +
          computerScore
      );
    } else {
      console.log("Something went wrong. It wasn't me.");
    }
  }
}

//-------------------------------------------------------------------------

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock!";

// Below, I am using a 'function reference', so I don't have to
// write out the entire function when I use the addEventlistener.
// the function reference is 'handleWhateverEvent'.

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

let resultsDisplay = document.getElementById('results');