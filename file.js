function computerPlay () {
    let compOptions = ["rock", "paper", "scissors"];
    let randomAnswer = compOptions[Math.floor(Math.random()*compOptions.length)];
    return randomAnswer;
};

function playerPlay() {
    do {
        var playerOptions = prompt("Type either 'rock', 'paper', or 'scissors' to play").toLowerCase();
    } while (playerOptions !== "rock" && playerOptions !== "paper" && playerOptions !== "scissors");  
    return playerOptions;  
};

const playerSelection = playerPlay();
const computerSelection = computerPlay();
let playerScore = 0;
let cpuScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
        roundWinner = 'tie';
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        ) {
        console.log("You Win!");
        playerScore = ++playerScore;
        roundWinner = 'player';
    } else if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper")
        ) {
        console.log("You Lose :(");
        cpuScore = ++cpuScore;
        roundWinner = 'computer';
    }
}

function gameOver() {
    if (playerScore < 3 || cpuScore < 3) {
        do {
            return playRound;
        } while (playerScore !== 3 || cpuScore !== 3);
    } else {
        console.log("Game Over!");
    }
}

console.log("You played:", playerSelection);
console.log("PC played:", computerSelection);
console.log("Outcome:", playRound(playerSelection, computerSelection));
console.log("Player points:", playerScore);
console.log("PC points:", cpuScore);

