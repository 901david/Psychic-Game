// Arrray used by the computer to randomly choose a letter fro the alphabet
var alphabetChoices = ["a","b","c","d","e","f","g","h",
						"i","j","k","l","m","n","o","p",
						"q","r","s","t","u","v","w","x",
						"y","z"];
// Variables that need to be defined
var wins = 0;
var guesses = 8;

//This dictates the users input
document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	console.log(userGuess);


	//Computer Randomizer Sequence
	var computerGuess = alphabetChoices [Math.floor(Math.random()
		*alphabetChoices.length)];
	console.log(computerGuess);

	if (userGuess === computerGuess) {
		wins++;
		alert("You win!! You guessed the letter " + userGuess + "IS what I was thinking of");
		else if (userGuess !=== computerGuess)
			guesses--;
		
		else 
			alert("I don't think you made a valid selection.")
		}
	if (guesses <= 0) {
		alert("You lose!!! Try Again");
	}
	// This is where I put the HTML modification code
	}

	}