function UserChoice(userInput) {
  userInput = window.prompt("Please enter your choice to play");
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Not belong. make correct choice!");
  }
}

function computerPlay() {
  const randomNmbr = Math.floor(Math.random() * 3);
  if (randomNmbr === 0) {
    return "Rock";
  } else if (randomNmbr === 1) {
    return "Paper";
  } else if (randomNmbr === 2) {
    return "Scissor";
  }
}
console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    return "the game is a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "The computer wins!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "The computer wins!";
    } else {
      return "You won!";
    }
  }
}
const playerSelection = UserChoice("rock");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
