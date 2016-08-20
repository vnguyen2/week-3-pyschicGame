
var computerChoice = ("abcdefghijklmnopqrstuvwxyz").split("");

var userGuesses = [];

var wins = 0,
	losses = 0,
	guesses = 9;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("Computer chose: " + computerGuess);


function gameReset(){
	guesses = 9
	userGuesses= []
	computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
}

document.onkeyup = function(event){

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	function validate(strValue) {
	var letterCheck  = /^[a-z]+$/;
	if (letterCheck.test(strValue) == false) {
		alert("Only input a letter from A through Z");
	}
	else if (userInput == computerGuess) {
			wins++
			gameReset();
            console.log("Computer picks new letter: " + computerGuess);
		} 
		else if (guesses == 1) {
            losses++
            gameReset();
            console.log("Computer picks new letter: " + computerGuess);
          } 
          else if (userGuesses.indexOf(userInput) != -1) {
          		alert("You already picked this letter. Pick another.");
          	} 
          	else {
          		guesses--
          		userGuesses.push(userInput);
          		console.log("User guessed: " + userInput);
          	}
    }

    validate(userInput);

	var html = 	"<h1>The Psychic Game</h1>" +
				"<p>Guess what letter I'm thinking of</p>" +
				"<p>Wins: " + wins + "</p>" +
				"<p>Losses: " + losses + "</p>" +
				"<p>Guesses left: " + guesses + "</p>" +
				"<p>Your Guesses so far: " + userGuesses + "</p>";
				

	document.querySelector(".game").innerHTML = html;
}
		