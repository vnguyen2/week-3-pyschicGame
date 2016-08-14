
var computerChoice = ("abcdefghijklmnopqrstuvwxyz").split("");

var userGuesses = [];

var wins = 0,
	losses = 0,
	guesses = 9;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("Computer chose: " + computerGuess);

function validate(strValue) {
	var letterCheck  = /^[a-z]+$/;
	if (letterCheck.test(strValue) == false) {
		alert("Only input a letter from A through Z");
	}
}
