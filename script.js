// Get the buttons and attach event listeners
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));

// Function to get the computer's choice
function getCompChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
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
    } else {
        result = `You lose! ${compChoice} beats ${userChoice}`;
    }

    // Display the result
    alert(result);
}

// Function to start the game (can be expanded if needed)
function playGame() {
    // Add any game start logic here if needed
}

// Start the game
playGame();
