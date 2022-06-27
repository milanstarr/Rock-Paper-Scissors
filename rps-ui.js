"use strict";

const items = ["rock", "paper", "scissors"];

let roundCount = 0;
let roundStatement = "Round: " + roundCount;

let userScore = 0;
let computerScore = 0;
let scoreStatement = "Current score: ";

const winRound = "win";
const loseRound = "lose";
const tieRound = "tie";

//I wanted to create a variable so that I can just plug in the points update... but here,
// it keeps the points static. Whereas I want it to be updated. idk how i can make this happen!
//let winPointsUpdate = ++userScore + ',' + computerScore;


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
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
    return winRound;
    // is return winRound even needed anymore? I don't think it is...
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "rock"
  ) {
    pointsDisplay.innerHTML = "You lose. rock beats scissors";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
    return loseRound;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "rock") {
    pointsDisplay.innerHTML = "You win! paper beats rock.";
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
    return winRound;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "paper") {
    pointsDisplay.innerHTML = "You lose. paper beats rock.";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
    return loseRound;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "paper"
  ) {
    pointsDisplay.innerHTML = "You win. scissors beats paper.";
    resultsDisplay.innerHTML = scoreStatement + ++userScore + ',' + computerScore;
    return winRound;
  } else if (
    lowerPlayerSelection == "paper" &&
    computerSelection == "scissors"
  ) {
    pointsDisplay.innerHTML = "You lose. scissors beats paper.";
    resultsDisplay.innerHTML = scoreStatement + userScore + ',' + ++computerScore;
    return loseRound;
  } else if (lowerPlayerSelection == "rock" && computerSelection == "rock") {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
    return tieRound;
  } else if (lowerPlayerSelection == "paper" && computerSelection == "paper") {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
    return tieRound;
  } else if (
    lowerPlayerSelection == "scissors" &&
    computerSelection == "scissors"
  ) {
    pointsDisplay.innerHTML = "It's a tie!";
    resultsDisplay.innerHTML = scoreStatement + userScore + "," + computerScore;
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



/* here, i am taking the logic that tallies points and rounds for the game, 
but I am taking it out of the game function so that it can be a global variable.
I don't understand why 100%... is it because the game() function isn't going to 
be used anymore in the UI? like it isn't needed? */




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

  console.log(`Current Score: ${userScore}, ${computerScore}`);
  
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
    } else if (roundStatus == loseRound) {
      console.log(scoreStatement + userScore + ',' + ++computerScore);
     
    } else if (roundStatus == tieRound) {
      console.log(scoreStatement + userScore + "," + computerScore);
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

let resultsDisplay = document.getElementById("results");

let roundsDisplay = document.getElementById('rounds');
