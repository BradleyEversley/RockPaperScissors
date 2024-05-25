function getUserChoice() {
    let isValid = false;
    let userInput;  
    while (!isValid) {
        userInput = prompt("Type 'Rock', 'Paper', or 'Scissors'").trim();
        userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
            isValid = true;
        } else {
            alert("Invalid input. Please type 'Rock', 'Paper', or 'Scissors'.");
        }
    }
    return userInput;
}

function getCompChoice() {
    let rand = Math.random() * 100;
    Math.random();
    if (rand <= 30) {
        return "Rock";
    } else if (rand > 30 && rand <= 60) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie";
    } else if 
    ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || 
    (humanChoice == "Scissors" && computerChoice == "Paper")) 
    {
        return "User";
    } else {
        return "Computer";
    }
}

function playGame() {
    let userScore = 0;
    let compScore = 0;
        
    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const compChoice = getCompChoice();
        const roundWinner = playRound(userChoice, compChoice);
        
        if (roundWinner == "User") {
                    userScore ++;
        } else if (roundWinner == "Computer") {
                compScore ++;
        }

        console.log(`Round ${i + 1}: `);
        console.log('You chose ' + userChoice);
        console.log('The computer chose ' + compChoice);

         if (roundWinner == "User") {
            console.log(userChoice + " beats " + compChoice + "!");
        } else if (roundWinner == "Computer") {
             console.log(compChoice + " beats " + userChoice + "!");
         } else {
            console.log("It's a tie!");
        }

        console.log('You: ' + userScore + ' | ' + 'Computer: ' + compScore);
    }
        
                
        
        console.log(`Final Scores - User: ${userScore}, Computer: ${compScore}`);
        return {userScore, compScore};
        
}


playGame();