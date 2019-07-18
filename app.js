let pScore = 0;
let cScore = 0;



function score(pScore, cScore) {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

}

function compareSelection(playerSelection, computerSelection) {

     /* Win condition */

     if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
     (playerSelection == 'paper' && computerSelection == 'rock') ||
     (playerSelection == 'scissors' && computerSelection == 'paper')) {
         pScore++;
         document.querySelector('.hand-compare h2').textContent = "Player wins!";
     }

 /* Lose condition */

 else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
     (playerSelection == 'paper' && computerSelection == 'scissors') ||
     (playerSelection == 'scissors' && computerSelection == 'rock')) {
        cScore++;
        document.querySelector('.hand-compare h2').textContent = "Computer wins!";
     }

 /* Tie condition */

 else if (playerSelection == computerSelection) {
     document.querySelector('.hand-compare h2').textContent = "Match tied!";
 }
 
 score(pScore, cScore);

}


function playRound(playerChoice) {

    const playerSelection = playerChoice.target.className;
    const playerHand= document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    let computerNumber = ['rock', 'paper', 'scissors'];
    const computerSelection = computerNumber[Math.floor(Math.random() * 3)];

    playerHand.src = `./assets/${playerSelection}.png`;
    computerHand.src = `./assets/${computerSelection}.png`;

    compareSelection(playerSelection, computerSelection);
}



const selector = document.querySelectorAll('button');

selector.forEach((button) => {
    button.addEventListener('click', playRound);
}); 



/* zoom with DOM
    
function transform(e){
    const hover = document.querySelector(`.${e.className}`);

    hover.classList.add('transform');
}*/