let playerScore = 0;
let computerScore = 0;
const resultsElement = document.getElementById( "results");

// Generate computer's choice
const computerSelection = getComputerChoice();
function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    return randomString;
}

// UI Logic
function handleButtonClick(event) {
    const playerSelection = event.target.id;
    playRound(playerSelection);
    const result = playRound(playerSelection, computerSelection);
    
    if (result === "You won") {
        playerScore++;
    }
    else if (result === "Computer won") {
        computerScore++;
    }

    updateScore();
    checkForWinner();

}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Player: ${playerScore} - Computer ${computerScore}`;
}

function checkForWinner() {
    if (playerScore === 5) {
        resultsElement.textContent = "Player wins the game!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        resultsElement.textContent = "Computer wins the game!";
        playerScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", handleButtonClick);
paperButton.addEventListener("click", handleButtonClick);
scissorsButton.addEventListener("click", handleButtonClick);

// Compare the user and computer's choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "The game is draw";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!";
    } else {
        return "Computer won";
    }
}

