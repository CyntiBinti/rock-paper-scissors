function computerSelection () {
    let options = ["Rock", "Paper", "Scissors"];
    let randomAnswer = options[Math.floor(Math.random()*options.length)];
    return randomAnswer;
}

var playerSelection = prompt("Type either 'Rock', 'Paper', or 'Scissors' to play");

function game() {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lose!");
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("It's a Tie!");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Win!");
    }
}