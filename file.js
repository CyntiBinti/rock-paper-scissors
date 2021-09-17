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
var playerCount = 0;
var computerCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!");
        playerCount ++;
        computerCount +=0;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose :(");
        playerCount +=0;
        computerCount ++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose :(");
        playerCount +=0;
        computerCount ++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win!");
        playerCount ++;
        computerCount +=0;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose :(");
        playerCount +=0;
        computerCount ++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win!");
        playerCount ++;
        computerCount +=0;
    }
}

var playerScore = 0;
var compScore = 0;
function scoreCounter(playerSelection) {
    if (playerSelection === "You Win!") {
        playerScore = ++playerScore;
        return playerScore;
    } else if (playerSelection === "You Lose :(") {
        compScore = ++compScore;
        return compScore;
    }
}

console.log("You played:", playerSelection);
console.log("PC played:", computerSelection);
console.log("Outcome:", playRound(playerSelection, computerSelection));
console.log("Player points:", playerCount);
console.log("PC points:", computerCount);
console.log("Player score:", playerScore);
console.log("PC score:", compScore);

