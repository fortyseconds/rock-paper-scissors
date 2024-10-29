function getComputerChoice() {
  const randomValue = Math.random();

  if (randomValue <= 0.33) {
      return "rock";
  } else if (randomValue <= 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
  } else {
      console.log("Invalid choice.");
      return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
      console.log("It's a tie!");
  } else if (
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "paper")
  ) {
      console.log("You lose!");
      computerScore++;
  } else {
      console.log("You win!");
      humanScore++;
  }

  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      playRound();
  }

  if (humanScore > computerScore) {
      console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
      console.log("The computer wins the game!");
  } else {
      console.log("The game is a tie!");
  }
}

playGame();