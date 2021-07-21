let pcWonCounter = 0;
let playerWonCounter = 0;

function myClick(playerChoice) {
    let pcOptions = ["rock", "scissors", "paper"];
    let randomDecimalNumber = Math.random();

    let randomNumber = randomDecimalNumber * 10;
    let randomInt = Math.floor(randomNumber);
    let finalNumber = randomInt % 3;
    let pcChoice = pcOptions[finalNumber];

    let result = decideWinner(pcChoice, playerChoice);
    if (result == "pcwon") {
        document.getElementById("pcvalue").innerHTML = ++pcWonCounter;
    }
    else if (result == "playerwon") {
        document.getElementById("playervalue").innerHTML = ++playerWonCounter;
    }
    // if one of players got to 5 points show game over screen
    if (pcWonCounter == 5) {
        gameOver("pc");
    }
    else if (playerWonCounter == 5) {
        gameOver("player");
    }

}

function decideWinner(pcChoice, playerChoice) {

    let myOutput = document.getElementById("output");

    if (pcChoice === playerChoice) {
        myOutput.textContent = `Its a tie! You chose ${playerChoice} and The computer chose ${pcChoice}`;
        return "draw"
    }
    else if (pcChoice == "rock" && playerChoice == "scissors") {
        myOutput.textContent = `You lost! You chose ${playerChoice} and The computer chose ${pcChoice}`;
        return "pcwon"
    }
    else if (pcChoice == "paper" && playerChoice == "rock") {
        myOutput.textContent = `You lost! You chose ${playerChoice} and The computer chose ${pcChoice}`;
        return "pcwon"
    }
    else if (pcChoice == "scissors" && playerChoice == "paper") {
        myOutput.textContent = `You lost! You chose ${playerChoice} and The computer chose ${pcChoice}`;
        return "pcwon"
    }
    else {
        myOutput.textContent = `You won! You chose ${playerChoice} and The computer chose ${pcChoice}`;
        return "playerwon"
    }
}

function gameOver(winner) {
    let gameOverModalText = document.querySelector(".game-over-modal-text");
    let gameOverModal = document.querySelector(".game-over-modal-wrapper");
    let myOutput = document.getElementById("output");
    if (gameOverModal !== undefined || gameOverModalText !== undefined) {
        gameOverModal.classList.remove("hidden")
        if (winner === "pc") {
            gameOverModalText.textContent = `PC has won the game with score:\n\n${pcWonCounter} - ${playerWonCounter}!`

        }
        else if (winner === "player") {
            gameOverModalText.textContent = `Player has won the game with score:\n\n${playerWonCounter} - ${pcWonCounter}!`

        }
        myOutput.textContent = "May the Better Player Win!"
    }
}

function playAgain() {
    pcWonCounter = 0;
    playerWonCounter = 0;
    let gameOverModal = document.querySelector(".game-over-modal-wrapper");
    if (gameOverModal !== undefined || gameOverModalText !== undefined) {
        gameOverModal.classList.add("hidden");
    }
    document.getElementById("playervalue").innerHTML = playerWonCounter;
    document.getElementById("pcvalue").innerHTML = pcWonCounter;
}


