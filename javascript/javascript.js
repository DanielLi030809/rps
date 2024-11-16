/* Randomly generates a choice among "rock", "paper" or "scissors" */
function getComputerChoice() {
    let num = Math.random();
    if (num < 1 / 3) {
        return 'rock'
    } else if (num < 2 / 3) {
        return 'scissors'
    } else {
        return 'paper'
    }
}

/* Takes in user's input of either "rock" or "paper" or "scissors" */
function getHumanChoice() {
    let userInput = prompt("What's your move? (input 'rock' or 'paper' or 'scissors')");
    return userInput.toLowerCase();
}

/* Simulates a round of rock, paper, and scissors */
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "tie";
    }
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        return "human";
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return "human";
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        return "human";
    } else {
        return "computer";
    }
}

/* Simulates a game of rock, paper, scissors with 5 rounds */
function playGame() {
    let count = 0;
    let humanScore = 0;
    let computerScore = 0;
    while (count < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result == "human") {
            humanScore++;
        } else if (result == "computer") {
            computerScore++;
        }
        count++;
    }
    if (humanScore > computerScore) {
        return "Winner: You";
    } else {
        return "Winner: Computer";
    }
}
console.log(playGame());


