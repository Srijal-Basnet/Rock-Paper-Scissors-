//Initial Variables

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

    addLog(`Game started for ${totalRounds} rounds.`); 
    gameActive = true;
})

restartBtn.addEventListener("click",()=>{
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".current-round").textContent = currentRound;

    document.querySelector(".log-box").innerHTML = "";
    addLog(`Game restarted.`); 
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

    addLog(
        `Round ${currentRound}: You chose ${humanChoice}, Computer chose ${computerChoice}.`
    ); 

    let result = "";

    if(humanChoice===computerChoice){
        result = `<span style="color:gray">Round Result: DRAW</span>`; 
        addLog(result);
    }
    else if(
        (humanChoice==="Rock" && computerChoice==="Scissors") ||
        (humanChoice==="Paper" && computerChoice==="Rock") ||
        (humanChoice==="Scissors" && computerChoice==="Paper")
    ){
        result = `<span style="color:green">Round Result: YOU WIN</span>`;
        addLog(result); 
        humanScore += 1;
    }
    else{
        result = `<span style="color:red">Round Result: YOU LOSE</span>`; 
        addLog(result); 
        computerScore += 1;
    }

    // Update the Scoreboard
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".current-round").textContent = currentRound;

    if(currentRound >= totalRounds){
        addLog(`<strong>Game Over!</strong>`); 

        if(humanScore > computerScore){
            addLog(`<span style="color:green"><strong>You won the game!</strong></span>`); 
        }
        else if(humanScore < computerScore){
            addLog(`<span style="color:red"><strong>You lost the game.</strong></span>`); 
        }
        else{
            addLog(`<strong>Final Result: TIE</strong>`); 
        }

        // Play again function
        setTimeout(()=>{
            if(confirm("Do You Want To Play Again?")){
                restartBtn.click();
            }
        },2000);
    }

    currentRound += 1;        
}

// Display LogBox
function addLog(message){
    const box = document.querySelector(".log-box");
    const p = document.createElement("p");
    p.innerHTML = message; 
    box.appendChild(p);

    box.scrollTop = box.scrollHeight;
}








