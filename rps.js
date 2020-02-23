    let playerScore = 0
    let computerScore = 0


function playGame() {

    messageBox("Make a selection to begin!");
    const rock = document.getElementById("rock");
    rock.onclick = () => playRound("rock");
    const paper = document.getElementById("paper");
    paper.onclick = () => playRound("paper");
    const scissors = document.getElementById("scissors");
    scissors.onclick = () => playRound("scissors");


}     

function playRound(playerSelection) {
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    computerChoice = computerPlay()
   
    if (playerSelection == computerChoice)  {
        messageBox("You chose: " + playerSelection +  "\n" +  "Computer chose: " + computerChoice + "\nThis round is a tie"); 
        return;        
         }
    else if ((playerSelection == "rock" && computerChoice == "scissors") ||
    (playerSelection == "paper" && computerChoice == "rock") ||
    (playerSelection == "scissors" && computerChoice == "paper")) 
        {
            messageBox("You chose: " + playerSelection +  "\n" +  "Computer chose: " + computerChoice + "\nYou win this round!"); 
         playerScore++   
         playerScoreDisplay.textContent  = ": " + playerScore;
         if (playerScore == 5) {
             messageBox("You win the game!")
             return
         }
        }
    else {
        messageBox("You chose: " + playerSelection +  "\n" +  "Computer chose: " + computerChoice + "\nComputer wins this round!"); 
        computerScore++
        computerScoreDisplay.textContent  = ": " + computerScore; 
        if (computerScore == 5) {
            messageBox("The computer won the game!")
            return
        }
    }

}

function computerPlay(){
  
    switch(Math.floor  (  ((Math.random() * 3) + 1) )) {
      case 1:
      computerChoice = "rock";
      break;
      case 2:
      computerChoice = "paper";
      break;
      case 3:
      computerChoice = "scissors";
      break;
    }
      return computerChoice
}


function messageBox(msg) {
    const messages = document.getElementById("messages");
    messages.textContent = (msg);
}

