const computerPlay = () => {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let chance = Math.random();
    if( chance <= (1/3)) {
        return choice[0];
    } else if ( chance > (1/3) && chance <= (2/3) ){
        return choice[1];
    } else {
        return choice[2];
    }
};

let computerChoice = computerPlay();
let playerChoice = prompt('Rock Paper Scissors! What will you choose?');

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


const playGame = (playerSelection, computerSelection) => {

    if (playerSelection === null) {
        alert('Game Cancelled');
    } else {
        if (playerSelection.toLowerCase() ==='rock' && computerSelection.toLowerCase() === 'paper'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Lose! Paper beats Rock`;
        } else if (playerSelection.toLowerCase() ==='rock' && computerSelection.toLowerCase() === 'scissors'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Win! Rock beats Scissors`;
        } else if (playerSelection.toLowerCase() ==='scissors' && computerSelection.toLowerCase() === 'paper'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Win! Scissors beats Paper`;
        } else if (playerSelection.toLowerCase() ==='scissors' && computerSelection.toLowerCase() === 'rock'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Lose! Rock beats Scissors`;
        } else if (playerSelection.toLowerCase() ==='paper' && computerSelection.toLowerCase() === 'scissors'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Lose! Scissors beats Paper`;
        } else if (playerSelection.toLowerCase() ==='paper' && computerSelection.toLowerCase() === 'rock'){
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return 'You Win! Paper beats Rock';
        } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log(`Player chose ${playerSelection.toUpperCase()}`);
            console.log(`Computer chose ${computerSelection.toUpperCase()}`);
            return `You Draw! You both chose ${computerSelection}`;
        } else {
            alert('You have to choose among Rock, Paper, or Scissors');
        }
    }
}

console.log(playGame(playerChoice, computerChoice));