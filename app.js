


function compareSelection(playerSelection, computerSelection) {

     /* Win condition */

     if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
     (playerSelection == 'paper' && computerSelection == 'rock') ||
     (playerSelection == 'scissors' && computerSelection == 'paper')) {
         console.log("You win! " + playerSelection + " beats " + computerSelection);

     }

 /* Lose condition */

 else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
     (playerSelection == 'paper' && computerSelection == 'scissors') ||
     (playerSelection == 'scissors' && computerSelection == 'rock')) {
         console.log("You lose! " + computerSelection + " beats " + playerSelection);

     }

 /* Tie condition */

 else if (playerSelection == computerSelection) {
     console.log("Tie! You both chose " + playerSelection);
 }

}


function playRound(playerChoice) {

    playerSelection = playerChoice.target.className;

    let computerNumber = ['rock', 'paper', 'scissors'];
    const computerSelection = computerNumber[Math.floor(Math.random() * 3)];
    
    console.log(playerSelection, computerSelection);

    compareSelection(playerSelection, computerSelection);
}



const selector = document.querySelectorAll('button');

selector.forEach((button) => {
    button.addEventListener('click', playRound);
}); 


//Score

