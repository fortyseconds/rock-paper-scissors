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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
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
  const displayresults = document.createElement("div");
  displayresults.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
  document.body.appendChild(displayresults);

  if (humanScore === 5) {
    alert("Congratulations! You are the overall winner!");
} else if (computerScore === 5) {
    alert("The computer wins the game!");
}
}

const rockbutton = document.createElement("button");
rockbutton.textContent = "Rock";
rockbutton.addEventListener("click", () => {
    playRound("rock");
})

const scissorsbutton = document.createElement("button");
scissorsbutton.textContent = "Scissors";
scissorsbutton.addEventListener("click", () => {
    playRound("scissors");
})

const paperbutton = document.createElement("button");
paperbutton.textContent = "Paper";
paperbutton.addEventListener("click", () => {
    playRound("paper");
})

document.body.appendChild(rockbutton);
document.body.appendChild(scissorsbutton);
document.body.appendChild(paperbutton);



