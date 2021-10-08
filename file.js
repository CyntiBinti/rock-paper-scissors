function playRound() {
    let playerScore = 0;
    let cpuScore = 0;

    let computerSelection
    let playerSelection
    let game

    for (let i = 0; i < 3; i++) {

        computerSelection = function computerPlay () {
            let compOptions = ["rock", "paper", "scissors"];
            let randomAnswer = compOptions[Math.floor(Math.random()*compOptions.length)];
            return randomAnswer;
        };

        playerSelection = function playerPlay() {
            do {
                var playerOptions = prompt("Type either 'rock', 'paper', or 'scissors' to play").toLowerCase();
            } while (playerOptions !== "rock" && playerOptions !== "paper" && playerOptions !== "scissors");  
            return playerOptions;  
        };

        game = function playRound() {
            if (playerSelection === computerSelection) {
                console.log("It's a Tie!");
            } else if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "rock")
                ) {
                console.log("You Win!");
                playerScore = ++playerScore;
            } else if (
                (playerSelection == "scissors" && computerSelection == "rock") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "rock" && computerSelection == "paper")
                ) {
                console.log("You Lose :(");
                cpuScore = ++cpuScore;
            }
        }
    } console.log("GAME OVER");
}

console.log("You played:", playerSelection);
console.log("PC played:", computerSelection);
console.log("Outcome:", game);
console.log("Player points:", playerScore);
console.log("PC points:", cpuScore);

