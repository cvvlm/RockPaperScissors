let rps = document.querySelector('.game')




function computerPlay() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function singleRound(playerSelection, computerPlay) {
    if (playerSelection.toUpperCase() === computerPlay.toUpperCase()) {
        alert("Draw!");
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerPlay.toUpperCase() === "SCISSORS") {
        alert("You win! Rock beats Scissors");
        playerScore += 1;
    } 
    else if (playerSelection.toUpperCase() === "PAPER" && computerPlay.toUpperCase() === "ROCK") {
        alert("You win! Paper beats Rock");
        playerScore += 1;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerPlay.toUpperCase() === "PAPER") {
        alert("You win! Scissors beats Paper");
        playerScore += 1;
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerPlay.toUpperCase() === "ROCK") {
        alert("You lose! Rock beats Scissors");
        computerScore += 1;
    }    
    else if (playerSelection.toUpperCase() === "ROCK" && computerPlay.toUpperCase() === "PAPER") {
        alert("You lose! Paper beats Rock");
        computerScore += 1;
    }   
    else if (playerSelection.toUpperCase() === "PAPER" && computerPlay.toUpperCase() === "SCISSORS") {
        alert("You lose! Scissors beats Paper");
        computerScore += 1;
    }     
}
function game() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Pick: Rock, Paper, Scissors");
        singleRound(playerChoice, computerPlay());
    }
    if (playerScore > computerScore) {
        alert(`You won a game! The score is: You:${playerScore} Computer:${computerScore}`);
    }
    else if (playerScore < computerScore) {
        alert(`You lost a game! The score is: You:${playerScore} Computer:${computerScore}`);

    }
    else {
        alert(`Draw! The score is: You:${playerScore} Computer:${computerScore}`);
    }

}
//let playerScore = 0;
//let computerScore = 0;
//game();
