function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    let randomAnswer = options[Math.floor(Math.random()*options.length)];
    return randomAnswer;
}

var playerSelection;
do {
    playerSelection = prompt("Type either 'Rock', 'Paper', or 'Scissors' to play").toLowerCase();
} while (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors" );

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

//could also potentially do this function as a switch() to be more DRY?

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(playerCount);
console.log(computerCount);