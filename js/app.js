const computerPlay = () => {
    let choice = ['rock', 'paper', 'scissors'];
    let chance = Math.random();
    if( chance <= (1/3)) {
        return choice[0];
    } else if ( chance > (1/3) && chance <= (2/3) ){
        return choice[1];
    } else {
        return choice[2];
    }
};

let computerScore =0;
let humanScore = 0;


const playGame = function (e) {
    let playerSelection = this.id;
    let computerSelection = computerPlay();

    CScore.textContent = computerScore;
    HScore.textContent = humanScore;

    if (playerSelection === null) {
        alert('Game Cancelled');

    } else {
        if (playerSelection ==='rock' && computerSelection === 'paper'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Lose! Paper beats Rock.`;
            narrationContainer.appendChild(narration);
            computerScore++;
            CScore.textContent = computerScore;

        
        } else if (playerSelection ==='rock' && computerSelection === 'scissors'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Win! Rock beats Scissors.`;
            narrationContainer.appendChild(narration);
            humanScore++;
            HScore.textContent = humanScore;
            
        } else if (playerSelection ==='scissors' && computerSelection === 'paper'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Win! Scissors beats Paper.`;
            narrationContainer.appendChild(narration);
            humanScore++;
            HScore.textContent = humanScore;

        } else if (playerSelection ==='scissors' && computerSelection === 'rock'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Lose! Rock beats Scissors.`;
            narrationContainer.appendChild(narration);
            computerScore++;
            CScore.textContent = computerScore;


            
        } else if (playerSelection ==='paper' && computerSelection === 'scissors'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Lose! Scissors beats Paper.`;
            narrationContainer.appendChild(narration);
            computerScore++;
            CScore.textContent = computerScore;


            
        } else if (playerSelection ==='paper' && computerSelection === 'rock'){
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Win! Paper beats Rock.`;
            narrationContainer.appendChild(narration);
            humanScore++;
            HScore.textContent = humanScore;


        } else if (playerSelection === computerSelection) {
            narration.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. You Draw! You both chose ${computerSelection}.`;
            narrationContainer.appendChild(narration);

        } 
    };
    if (computerScore > 4 && humanScore <= 4)  {
        narration.textContent = `Computer Has Won!`
        computerScore = 0;
        humanScore = 0;
        return;

    } else if(humanScore > 4 && computerScore<=4 ){
        narration.textContent = `Player Has Won!`
        computerScore = 0;
        humanScore = 0;
        return;
    }    
}

const buttonContainer = document.querySelector('.buttons');
const narrationContainer = document.querySelector('.narration');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const narration = document.createElement('div');
const CScore = document.querySelector('.Cscore');
const HScore = document.querySelector('.Hscore');



rockBtn.addEventListener('click', playGame);

paperBtn.addEventListener('click', playGame);

scissorsBtn.addEventListener('click', playGame);




/* 
Rock Paper
Rock Scissors
Rock Rock

Scissors Paper
Scissors Rock
Scissors Scissors

Paper Rock
Paper Scissors
Pape Paper
*/