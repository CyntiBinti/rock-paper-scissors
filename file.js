function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    let randomAnswer = options[Math.floor(Math.random()*options.length)];
    return randomAnswer;
}

const playerSelection = prompt("Type either 'Rock', 'Paper', or 'Scissors' to play").toLowerCase();
const computerSelection = computerPlay();
const playerCount = 0;
const computerCount = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
        playerCount +=0;
        computerCount +=0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!");
        playerCount +=1;
        computerCount +=0;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose");
        playerCount +=0;
        computerCount +=1;
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    .
}
