const section = document.querySelector('section');
const btn = document.querySelector('#startBtn');
const resultDiv = document.querySelector('#results');

const options = document.querySelectorAll('.options div');
options.forEach((option) =>
  option.addEventListener('click', () => {
    let winner = playRound(
      option.textContent.trim().toLowerCase(),
      computerPlay()
    );
    resultDiv.innerHTML += winner;
  })
);

function computerPlay() {
  let options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoses, computerChoses) {
  let playerSelection = playerChoses.toLowerCase();
  let computerSelection = computerChoses.toLowerCase();
  resultDiv.innerHTML = '';
  resultDiv.innerHTML += `Computer chose ${computerSelection}, Player chose ${playerSelection}<br />`;
  if (playerSelection === computerSelection) {
    return 'Its a draw!';
  } else {
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return 'Computer wins!';
      }
      if (computerSelection === 'scissors') {
        return 'Player wins!';
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        return 'Player wins!';
      }
      if (computerSelection === 'scissors') {
        return 'Computer wins!';
      }
    } else {
      if (computerSelection === 'rock') {
        return 'Computer wins!';
      }
      if (computerSelection === 'paper') {
        return 'Player wins!';
      }
    }
  }
}

function playerChoice() {
  let playerChoice = prompt('Please enter your choice').toLowerCase();
  while (
    !(
      playerChoice === 'rock' ||
      playerChoice === 'paper' ||
      playerChoice === 'scissors'
    )
  ) {
    playerChoice = prompt('Please enter a valid choice').toLowerCase();
  }
  return playerChoice;
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerChosen = playerChoice();
    let computerChosen = computerPlay();
    let p = document.createElement('p');
    let winner = playRound(playerChosen, computerChosen);
    if (winner === 'Computer wins') {
      //   console.log('Computer wins this round!');
      p.textContent = `Player chose: ${playerChosen}, Computer chose: ${computerChosen} - Computer won!`;
      computerScore++;
    } else if (winner === 'Player wins') {
      //   console.log('Player wins this round!');
      playerScore++;
      p.textContent = `Player chose: ${playerChosen}, Computer chose: ${computerChosen} - Player won!`;
    } else {
      p.textContent = `Player chose: ${playerChosen}, Computer chose: ${computerChosen} - Its a draw!`;
    }
    section.appendChild(p);
  }

  let gameWonBy = gameWinner(playerScore, computerScore);
  let p = document.createElement('p');
  p.textContent = gameWonBy;
  section.appendChild(p);
}

function gameWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'Player wins';
  } else if (playerScore < computerScore) {
    return 'Computer wins';
  } else {
    return 'Its a draw!';
  }
}
