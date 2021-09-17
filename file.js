function computerPlay () {
    let compOptions = ["rock", "paper", "scissors"];
    let randomAnswer = compOptions[Math.floor(Math.random()*compOptions.length)];
    return randomAnswer;
};

function playerPlay() {
    do {
        var playerOptions = prompt("Type either 'rock', 'paper', or 'scissors' to play").toLowerCase();
    } while (playerOptions !== "rock" && playerOptions !== "paper" && playerOptions !== "scissors");    
};

const playerSelection = playerPlay();
const computerSelection = computerPlay();
var playerCount = 0;
var computerCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
        playerCount +=0;
        computerCount +=0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!");
        playerCount +=1;
        computerCount +=0;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose");
        playerCount +=0;
        computerCount +=1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose");
        playerCount +=0;
        computerCount +=1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win!");
        playerCount +=1;
        computerCount +=0;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose");
        playerCount +=0;
        computerCount +=1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win!");
        playerCount +=1;
        computerCount +=0;
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(playerCount);
console.log(computerCount);