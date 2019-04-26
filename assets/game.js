var letterList = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins=0;
var losses=0;
var totalGuesses=10;
var guessedLetters=[];



document.onkeyup = function()   {
    var choices = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var userGuess = event.key;
    var computerChoice = letterList[Math.floor(Math.random() * letterList.length)];

    if (choices.indexOf(userGuess)) {

        if(userGuess == computerChoice) {
            wins++;
            totalGuesses = 10;
            guessedLetters = [];
        }
        if(userGuess != computerChoice) {
            totalGuesses --;
            guessedLetters.push(userGuess);
        }
        if (totalGuesses == 0)  {
            totalGuesses = 10;
            losses++;
            guessedLetters =[];
        }

        document.getElementById('wins').innerHTML= wins;
        document.getElementById('losses').innerHTML= losses;
        document.getElementById('guesses').innerHTML= totalGuesses;
        document.getElementById('letters-guessed').innerHTML = guessedLetters
    }
};

console.log(computerChoice);

