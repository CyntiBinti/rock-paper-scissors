function computerPlay () {
    let options = ["Rock", "Paper", "Scissors"];
    let randomAnswer = options[Math.floor(Math.random()*options.length)];
    return randomAnswer;
}

console.log(computerPlay());

