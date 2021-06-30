let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {
    let random = getRandomInt(3);

    if (random === 0) return 'Rock';
    else if (random === 1) return 'Paper';
    else if (random === 2) return 'Scissors';
    else return 'Error';
}

function reset() {
    playerScore = 0;
    computerScore = 0;

    const resultHeadline = document.querySelector('.choices');
    const outcome = document.querySelector('.result');

    resultHeadline.textContent = '';
    outcome.textContent = '';
    updateScores();
}

function updateScores() {
    const scoreParagraph = document.querySelector('p');
    scoreParagraph.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function playARound(userChoice) {
    let computerChoice = computerPlay();

    const resultHeadline = document.querySelector('.choices');
    const outcome = document.querySelector('.result');

    resultHeadline.textContent = `You chose ${userChoice} - 
        The computer chose ${computerChoice}`;

    if (userChoice === 'rock') {
        if (computerChoice === 'Rock') outcome.textContent = 'Draw!';
        else if (computerChoice === 'Paper') {
            outcome.textContent = 'You lose';
            computerScore++;
        }
        else if (computerChoice === 'Scissors') {
            outcome.textContent = 'You win!';
            playerScore++;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'Paper') outcome.textContent = 'Draw!';
        else if (computerChoice === 'Scissors') {
            outcome.textContent = 'You lose';
            computerScore++;
        }
        else if (computerChoice === 'Rock') {
            outcome.textContent = 'You win!';
            playerScore++;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'Scissors') outcome.textContent = 'Draw!';
        else if (computerChoice === 'Rock') {
            outcome.textContent = 'You lose';
            computerScore++;
        }
        else if (computerChoice === 'Paper') {
            outcome.textContent = 'You win!';
            playerScore++;
        }
    }
    updateScores();
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'reset') reset();
        else playARound(button.id);
    });
});


