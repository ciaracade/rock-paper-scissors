const options = ["Rock", "Paper", "Scissors"];
const optionsBeat = new Map([
    ["rock", "paper"],
    ["paper", "scissors"],
    ["scissors", "rock"]
]);

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let messageString = "";

    if (playerSelection === optionsBeat.get(computerSelection)) {
        messageString = "You win! " + playerSelection + " beats " + computerSelection + "."

    } else if (computerSelection === optionsBeat.get(playerSelection)) {
        messageString = "You lose! " + computerSelection + " beats " + playerSelection + "."
    } else if (computerSelection === playerSelection) {
        messageString = "Tie! No winners."
    }

    return messageString;
}


function game() {
    var round = 0

    while (round < 5) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        round += 1;
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());

