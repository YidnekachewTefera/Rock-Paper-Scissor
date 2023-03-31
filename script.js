const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const resultContainer = document.querySelector(".resultContainer");
let currentGameStatus = document.createElement("h3");
const computerSelector = () => {
  let randomNumber = Math.random() * (3 - 1) + 1;
  return randomNumber.toFixed(0);
};
let counter = 0;
let humanWinningCounter = 0;
let computerWinningCounter = 0;
rock.addEventListener("click", () => {
  let computerSelection =
    computerSelector() == 1
      ? "rock"
      : computerSelector() == 2
      ? "paper"
      : "scissor";
  let role = "rock";
  if (computerSelection == role) {
    currentGameStatus.textContent = "";
    currentGameStatus.textContent += "Play Again";
    resultContainer.appendChild(currentGameStatus);
    counter--;
  } else if (computerSelection == "Paper") {
    currentGameStatus.textContent = "";
    computerWinningCounter++;
    currentGameStatus.textContent +=
      "Paper wins Rock" +
      " the computer has won for the " +
      computerWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  } else {
    currentGameStatus.textContent = "";
    humanWinningCounter++;
    currentGameStatus.textContent +=
      "Rock Wins againest Scissor " +
      "the human has won for the " +
      humanWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  }
  if (counter == 5) resetGame();
  counter++;
});
paper.addEventListener("click", () => {
  let computerSelection =
    computerSelector() == 1
      ? "rock"
      : computerSelector() == 2
      ? "paper"
      : "scissor";
  let role = "paper";
  if (computerSelection == role) {
    currentGameStatus.textContent += "Play Again";
    resultContainer.appendChild(currentGameStatus);
    counter--;
  } else if (computerSelection == "rock") {
    currentGameStatus.textContent = "";
    humanWinningCounter++;
    currentGameStatus.textContent +=
      "Paper wins Rock" +
      " the computer has won for the " +
      humanWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  } else {
    currentGameStatus.textContent = "";
    computerWinningCounter++;
    currentGameStatus.textContent +=
      "Scissor Wins againest Paper " +
      "the human has won for the " +
      computerWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  }
  if (counter == 5) resetGame();
  counter++;
});
scissor.addEventListener("click", () => {
  let computerSelection =
    computerSelector() == 1
      ? "rock"
      : computerSelector() == 2
      ? "paper"
      : "scissor";
  let role = "scissor";
  if (computerSelection == role) {
    currentGameStatus.textContent += "Play Again";
    resultContainer.appendChild(currentGameStatus);
    counter--;
  } else if (computerSelection == "Paper") {
    currentGameStatus.textContent = "";
    humanWinningCounter++;
    currentGameStatus.textContent +=
      "Scissor wins againest Paper" +
      " the computer has won for the " +
      humanWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  } else {
    currentGameStatus.textContent = "";
    computerWinningCounter++;
    currentGameStatus.textContent +=
      "Rock Wins againest Scissor " +
      "the human has won for the " +
      computerWinningCounter +
      " time";
    resultContainer.appendChild(currentGameStatus);
  }
  if (counter == 5) resetGame();
  counter++;
});
const resetGame = () => {
  rock.disabled = true;
  scissor.disabled = true;
  paper.disabled = true;
  if (computerWinningCounter > humanWinningCounter) {
    currentGameStatus.textContent = "";
    currentGameStatus.textContent = "Game Over You lose";
    currentGameStatus.style.backgroundColor = "red";
    currentGameStatus.style.color = "white";
    resultContainer.appendChild(currentGameStatus);
  } else {
    currentGameStatus.textContent = "";
    currentGameStatus.textContent += "Congratulations! You Won";
    currentGameStatus.style.backgroundColor = "green";
    currentGameStatus.style.color = "white";
    resultContainer.appendChild(currentGameStatus);
  }
  const restartBtn = document.createElement("button");

  restartBtn.textContent = "Restart Match ";
  restartBtn.addEventListener("click", () => {
    rock.disabled = false;
    scissor.disabled = false;
    paper.disabled = false;
    currentGameStatus.style.backgroundColor = "white";
    currentGameStatus.style.color = "black";
    humanWinningCounter = 0;
    computerWinningCounter = 0;
    counter = 0;
    currentGameStatus.textContent = "";
    resultContainer.removeChild(restartBtn);
  });
  resultContainer.appendChild(restartBtn);
};
