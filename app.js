// Get input from the user
const userChoice = prompt("Choose: rock, paper or scissors");
// Generate computer's choice
const strings = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * strings.length);
const randomString = strings[randomIndex];
// Compare the user and computer's choice
if (userChoice === randomString) {
    console.log("The game is draw");
} else if (userChoice === "paper" && randomString === "rock") {
    console.log("You won!");
} else if (userChoice === "rock" && randomString === "scissors") {
    console.log("You won");
} else if (userChoice === "scissors" && randomString === "paper") {
    console.log("You won!");
} else {
    console.log("Computer won");
}
// Display the choices