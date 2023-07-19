const options = ["Sword", "Shield", "Bow"];
const optionsBeat = new Map([
    ["sword", "bow"],
    ["bow", "shield"],
    ["shield", "sword"]
]);

const buttons = document.querySelectorAll('.Btn');
let results = document.getElementById("resultsSpan");
let rounds = document.getElementById("round");
let round = 0;

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerScoreNum = 0;
let computerScoreNum = 0;



function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let messageString = "";

    if(round < 5){
    if (playerSelection === optionsBeat.get(computerSelection)) {
        messageString = "You win! " + playerSelection + " beats " + computerSelection + ".";
        playerScoreNum += 1;

    } else if (computerSelection === optionsBeat.get(playerSelection)) {
        messageString = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        computerScoreNum += 1;
    } else if (computerSelection === playerSelection) {
        messageString = "Tie! No winners."
    }
    round += 1;


    playerScore.textContent = playerScoreNum;
    computerScore.textContent = computerScoreNum;
    rounds.textContent = "Round " + round;
   results.textContent = messageString;
} else {
    if (computerScoreNum>playerScoreNum){
        messageString = "Computer wins! ";
     } else if (playerScoreNum>computerScoreNum){
        messageString = "Player wins! ";
     } else {
        messageString = "Tie! ";
     }
    results.textContent = messageString + "Reload page to play again.";

}


}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        playRound(playerSelection, getComputerChoice());
    });
});


