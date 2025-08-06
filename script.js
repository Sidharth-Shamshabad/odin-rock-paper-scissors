function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return 'You win! Rock beats scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return 'You win! Paper beats rock';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win! Scissors beats paper';
    } else {
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log('Human score: ' + humanScore);
        console.log('Computer score: ' + computerScore);
    }
}

playGame();
