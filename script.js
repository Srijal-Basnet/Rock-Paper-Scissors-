// // Computer choice code

// function getComputerChoice(){
//     const choices = ["Rock","Paper","Scissors"];
//     const index = Math.floor(Math.random()*3);
//     console.log(index);
//     return choices[index];
// }

// // Human choice code

// function getHumanChoice(callback) {
//     const playerChoices = document.querySelectorAll(".player-choice");
    
//     playerChoices.forEach(img => {
//         img.addEventListener("click", () => {
//             const choice = img.alt; 
//             callback(choice); 
//         });
//     });
// }


// // Main Game Logic

// let humanScore = 0;
// let computerScore = 0;
// let currentRound = 1;
// let totalRounds = parseInt(document.querySelector(".round-input").value);

// function playGame(humanChoice, computerChoice) {
    
//     let result = "";
//     if (humanChoice === computerChoice) {
//         result = "Draw!";
//     } else if (
//         (humanChoice === "Rock" && computerChoice === "Scissors") ||
//         (humanChoice === "Paper" && computerChoice === "Rock") ||
//         (humanChoice === "Scissors" && computerChoice === "Paper")
//     ) {
//         result = "You win!";
//         humanScore++;
//     } else {
//         result = "Computer wins!";
//         computerScore++;
//     }

    
//     document.getElementById("user-score").textContent = userScore;
//     document.getElementById("computer-score").textContent = computerScore;

//     document.getElementById("current-round").textContent = currentRound;
//     document.getElementById("total-rounds").textContent = totalRounds;

//     console.log(`Round ${currentRound}: You chose ${humanChoice}, Computer chose ${computerChoice} → ${result}`);

//     currentRound++;

//     // check if game over
//     if (currentRound > totalRounds) {
//         console.log("Game Over!");
//         if (humanScore > computerScore) 
//             console.log("You win the game!");
//         else if (computerScore > humanScore) 
//             console.log("Computer wins the game!");
//         else 
//             console.log("The game is a draw!");
        
//         humanScore = 0;
//         computerScore = 0;
//         currentRound = 1;
//     }
// }

// const startBtn = document.querySelector(".Start-Btn");

// ==========================
// VARIABLES
// ==========================
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let totalRounds = parseInt(document.querySelector(".round-input").value);
let gameActive = false;

//  Game Start and Restart Button 

startBtn = document.querySelector(".start-btn");
restartBtn = document.querySelector(".restart-btn");

startBtn.addEventListener("click",()=>{
    totalRounds = parseInt(document.querySelector(".round-input").value);
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".current-round").textContent = currentRound;
    document.querySelector(".total-round").textContent = totalRounds;

    console.log("Game Started  For ",totalRounds , " rounds");
    gameActive = true;
})

restartBtn.addEventListener("click",()=>{
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".current-round").textContent = currentRound;
    console.log("Restarted the game");
    totalRounds = 3;
    document.querySelector(".total-round").textContent = totalRounds;
    gameActive = false;
})

// Computer choice code

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

// Human choice code

const playerChoices = document.querySelectorAll(".player-choice");
playerChoices.forEach((img)=>{
    img.addEventListener("click",()=>{
        if(!gameActive){
            alert("Start The Game First!");
            return;
        }
        
        if(currentRound<=totalRounds){
            playGame(img.alt);
        }
    });
});

// Play Game function
function playGame(humanChoice){
    
    const computerChoice = getComputerChoice();
    console.log("Round:",currentRound,": You chose ",humanChoice," while Computer chose ",computerChoice);
    let result = "";
    if(humanChoice===computerChoice){
        result = "DRAW!";
        console.log(result);
    }
    else if((humanChoice==="Rock" && computerChoice==="Scissors") ||
            (humanChoice==="Paper" && computerChoice==="Rock") ||
            (humanChoice==="Scissors" && computerChoice==="Paper") )
            {
                result = "YOU WIN!";
                humanScore+=1;
                console.log(result);
            }
    else{
        result = "YOU LOSE!";
        computerScore+=1;
        console.log(result);
    }

    // Update the Scoreboard
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".current-round").textContent = currentRound;

    if(currentRound>=totalRounds){
        console.log("Game Over!");
        if(humanScore>computerScore){
        console.log("You won the game!!!! Congrats!");
        }
        else if(humanScore<computerScore){
            console.log("You lost the game Better luck next time!");
        }
        else{
            console.log("TIE!! Both You and Computer drew");
        }
    }

    currentRound+=1;

    
            
}








