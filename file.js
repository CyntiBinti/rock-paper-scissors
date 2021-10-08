function playGame() {
    let playerScore = 0;
    let cpuScore = 0;

    let computerSelection;
    let playerSelection;
    let roundWinner;

    for (let i = 0; i < 3; i++) {

        function computerPlay () {
            let compOptions = ["rock", "paper", "scissors"];
            let randomAnswer = compOptions[Math.floor(Math.random()*compOptions.length)];
            return randomAnswer;
        };

        computerSelection = computerPlay();

        function playerPlay() {
            do {
                var playerOptions = prompt("Type either 'rock', 'paper', or 'scissors' to play").toLowerCase();
            } while (playerOptions !== "rock" && playerOptions !== "paper" && playerOptions !== "scissors");  
            return playerOptions;  
        };

        playerSelection = playerPlay();

        function roundWinner() {
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
        } roundWinner();
    } console.log("GAME OVER");

console.log("Player final score:", playerScore);
console.log("PC final score:", cpuScore);

} playGame();



