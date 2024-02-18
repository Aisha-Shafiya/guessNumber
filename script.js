let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

// To check are you available to play the game or not
if(playGame){
   submit.addEventListener('click', function(e){
    e.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
   })
}

// To check whether it's propernumber or not negative number or not a number
function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number')
   }
   else if(guess < 1){
    alert('Please enter a number mre than 1');
   }
   else if(guess > 100){
    alert('Please enter a number less than 100')
   }
   else {
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over, Random number was ${randomNumber}`);
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}

// To check whether the num is equal to random number or not
function checkGuess(guess){
   if(guess === randomNumber){
    displayMessage(`You guessed it right`)
   }
   else if( guess < randomNumber){
    displayMessage(`Number is too low`)
   }
   else if(guess > randomNumber){
    displayMessage(`Number is too big`)
   }
}

// To give the message and count of guesses
function displayGuess(guess){
    userInput.value = ``;
    userSlot.innerHTML += `${guess}  `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}


// To give the message it's low or hi
function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`  
}

// To end the game or start the newgame
function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userSlot.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

function endGame(){
userInput.value = ``;
userInput.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
startOver.appendChild(p)
playGame = false;
newGame()
}
