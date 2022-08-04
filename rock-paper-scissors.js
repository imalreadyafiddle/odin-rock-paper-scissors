function getComputerChoice() {
    let choiceNumber = Math.random()*100;
    let computerChoice = "";
    console.log(choiceNumber);
    if (choiceNumber <= 33) {
        computerChoice = "rock"
    } else if (choiceNumber >= 34 && choiceNumber <=66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerChoice () {
    let choice = prompt("Rock, Paper, or Scissors? First to Five Wins!");
    return choice.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose, paper beats rock.")
        return false;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win, rock beats scissors.")
        return true;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose, scissors beats paper.");
        return false;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, paper beats rock.");
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose, rock beats scissors.");
        return false;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win, scissors beats paper.");
        return true;
    } else if (playerSelection == computerSelection) {
        console.log("Tie, try again!")
        // playRound();
    } else {
        console.log("You entered an invalid choice, please try again");
        // playRound();
        // Maybe kick this back to getPlayerChoice? Why run another function if the input is invalid?
    }
}

function game () {
    let roundCount = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (roundCount < 5) {
        if (playRound(getPlayerChoice, getComputerChoice) = true) {
            roundCount++;
            playerScore++;
        } else if (playRound(getPlayerChoice, getComputerChoice) = false) {
            roundCount++;
            computerScore++;
        }
    }

    if (playerScore >= 3) {
        console.log("Congratulations, you win!");
    } else {
        console.log("You lose, try again!");
    }
}

// game();