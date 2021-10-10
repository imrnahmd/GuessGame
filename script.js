'use strict';
let secretNumber = Math.trunc((Math.random() * 20) + 1)

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message    // Display Message Function
}

// Check Button 

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)
// If  not a number
    if (!guess) {
        displayMessage('Not a number')
    } else if (guess === secretNumber) { //For match
        displayMessage('Correct Number')

        document.querySelector('body').style.backgroundColor = 'green'

        document.querySelector('.number').textContent = secretNumber

        document.querySelector('.number').style.width = '25rem'

        if (score > highScore) {    // High Score 
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess !== secretNumber) {  // Mismatch
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You Loose The Game')
            document.querySelector('.score').textContent = 0
        }
    }
})
// Re-start Game 
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc((Math.random() * 20) + 1)
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    displayMessage('Start Guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
})