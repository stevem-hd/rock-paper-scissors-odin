let score = 0;  

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

function playARound(userChoice) {
    let computerChoice = computerPlay();
    let outcome;

    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    if (userChoice === 'rock') {
        if (computerChoice === 'Rock') return 'Draw!';
        else if (computerChoice === 'Paper') return 'You lose';
        else if (computerChoice === 'Scissors') return 'You win!';
    } else if (userChoice === 'paper') {
        if (computerChoice === 'Paper') return 'Draw!';
        else if (computerChoice === 'Scissors') return 'You lose';
        else if (computerChoice === 'Rock') return 'You win!';
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'Scissors') return 'Draw!';
        else if (computerChoice === 'Rock') return 'You lose';
        else if (computerChoice === 'Paper') return 'You win!';
    } else {
        return 'Make a proper choice';
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}!!`);
        let playerChoice = prompt('Rock, paper or Scissors?')
        playerChoice = playerChoice.toLowerCase();

        let outcome = playARound(playerChoice);
        console.log(outcome);
    }
}

game();