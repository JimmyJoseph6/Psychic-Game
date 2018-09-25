

// Array of letters of english alphabet 
// Computer choices


var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//random selection forumla

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Updating the guesses left after selecting a letter function

var updateGuessesLeft = function() {
 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//updating 
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//"updateguesssofa" updates the nubmer of your guesses during the game

var updateGuessesSoFar = function() {
 
  document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//Resetting game parameters
// create new variable=function

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();

    console.log()

}

updateLetterToGuess();
updateGuessesLeft();

//"triggering keys will function guesses left function"

document.onkeyup = function(event) {
    guessesLeft--;
    
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        //adds to win column, and alerts the winning letter
        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++
                document.querySelector('#Wins').innerHTML = "Wins: " + wins;
                alert("The letter to guess is " + letterToGuess);
                reset();
            }
        //adds to loss column, and alerts the winning letter
        }else if(guessesLeft === 0){ 
            losses++;
            document.querySelector('#Losses').innerHTML = "Losses: " + losses;
            alert("The letter to guess is " + letterToGuess); 
            reset();
        }
};