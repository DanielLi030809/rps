/* Randomly generates a choice among "rock", "paper" or "scissors" */
function getComputerChoice() {
    let num = Math.random();
    if (num < 1 / 3) {
        return 'Rock'
    } else if (num < 2 / 3) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}

/* Takes in user's input of either "rock" or "paper" or "scissors" */
function getHumanChoice() {
    let userInput = prompt("What's your move? (input 'rock' or 'paper' or 'scissors')");
    return userInput.toLowerCase();
}

/* Simulates a round of rock, paper, and scissors */
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice != computerChoice) {
        if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
            humanCount++;
        } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
            humanCount++;
        } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
            humanCount++;
        } else {
            computerCount++;
        }
    }
}

function displayScore(humanCount, computerCount) {
    userScore.textContent = `You: ${humanCount}`;
    computerScore.textContent = `Computer: ${computerCount}`;
}

/* Simulates a game of rock, paper, scissors with 5 rounds */
function playGame(humanChoice) {
    let count = 0;
    let humanScore = 0;
    let computerScore = 0;
    while (count < 5) {
        let humanChoice = getHumanChoice();
        let result = playRound(humanChoice);
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

/* Create score display elments and add them to body */
const userScore = document.createElement("div");
const computerScore = document.createElement("div");
document.body.appendChild(userScore);
document.body.appendChild(computerScore);

/* Select button elements and store them as a node list */
const buttons = document.querySelectorAll("button");

let humanCount = 0;
let computerCount = 0;
/* When I user clicks a button, we pass that option into playRound function */
buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        let userChoice = button.textContent;
        playRound(userChoice);
        displayScore(humanCount, computerCount);
        if (humanCount === 5) {
            alert("You won!");
            humanCount = 0;
            computerCount = 0;
        } else if (computerCount === 5) {
            alert("Computer won!");
            displayScore(0, 0);
            humanCount = 0;
            computerCount = 0;
        }
    });
});








