// Prays to RNGeezus to determine the computer's choice
function getComputerChoice() {
    let choiceNumber = Math.random()*100;
    if (choiceNumber <= 33) {
        computerChoice = "rock"
    } else if (choiceNumber >= 34 && choiceNumber <=66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

// accepts player choice and computer choice, evaluates & returns result
function playRound (playerChoice, computerChoice) {
    // determine the result of the round
    if (playerChoice == computerChoice) {
        result.textContent = "TIE, BOTH CHOSE " + playerChoice.toUpperCase() + "!"
    } else if (
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        result.textContent = playerChoice.toUpperCase() + " BEATS " + computerChoice.toUpperCase() + "!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        checkScore();
    } else {
        result.textContent = playerChoice.toUpperCase() + " LOSES TO " + computerChoice.toUpperCase() + "!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        checkScore();
    }
}

function checkScore() {
    if (computerScore == 5 || playerScore == 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore == 5) {
        result.textContent = "HUMANITY HAS BESTED THE MACHINES"
    } else {
        result.textContent = "HUMANITY IS DOOMED BY THE MACHINES"
    }
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.querySelector('#player-score > span');
let computerScoreDisplay = document.querySelector('#computer-score > span')
let result = document.getElementById('result');

// create array from buttons on page
let buttons = Array.from(document.querySelectorAll('.game-button'));

// create click event listeners for each button in the array
buttons.forEach(button => button.addEventListener('click', () => {
    // arrow function to change the value of buttonClicked
    buttonClicked = button.id;
    console.log("You clicked " + buttonClicked + "!");
    playRound(buttonClicked, getComputerChoice());
}));

