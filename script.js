// Get the buttons and attach event listeners
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));
resetButton.addEventListener('click',  resetGame);

// Function to get the computer's choice
function getCompChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

// Elements to update the score and result
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');

let userScore = 0;
let compScore = 0;
const winningScore = 5;

function displayWinner() {
    if (userScore == winningScore) {
            resultDisplay.textContent = "Congratulations! You won the game!";
    } else {
        resultDisplay.textContent = "Computer has won the game";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.style.display = 'block';
    
}

// Function to play a single round
function playRound(userChoice) {
    const compChoice = getCompChoice();
    let result = "";

    if (userChoice === compChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'Rock' && compChoice === 'Scissors') ||
        (userChoice === 'Paper' && compChoice === 'Rock') ||
        (userChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        result = `You win! ${userChoice} beats ${compChoice}`;
        userScore ++;
    } else {
        result = `You lose! ${compChoice} beats ${userChoice}`;
        compScore ++;
    }

    // Display the result
    scoreDisplay.textContent = `User: ${userScore} | Computer: ${compScore}`;
    resultDisplay.textContent = result;

    if (userScore == winningScore || compScore == winningScore) {
        displayWinner();
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;

    scoreDisplay.textContent = `User: ${userScore} | Computer: ${compScore}`;
    resultDisplay.textContent ="";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    resetButton.style.display = 'none';
}

// Function to start the game (can be expanded if needed)
function playGame() {
    // Add any game start logic here if needed
}

// Start the game
playGame();
