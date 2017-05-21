// Arrray used by the computer to randomly choose a letter fro the alphabet
var alphabetChoices = ["a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x",
"y","z"];
// Variables that need to be defined
var wins = 0;
var guesses = 8;
var losses = 0;
var displayLetter = "";
var computerGuess;
compNum();
//Computer Randomizer Sequence
function compNum() {
	computerGuess = alphabetChoices [Math.floor(Math.random()
		* alphabetChoices.length)];
	console.log(computerGuess);
}

	//This dictates the users input
	document.onkeyup = function(event){
	// Determine what user presses by storing it
	var userGuess = event.key;
	userGuess = userGuess.toLowerCase();
	$(".winnerOrLoser").html("");
	$(".sidePic").attr("src", "assets/images/cleohappy.jpg");
	typedLetter = false;
	console.log(userGuess);
	for (var i = 0; i < alphabetChoices.length; i++) {
		if (userGuess === alphabetChoices[i]) {
			if (displayLetter.includes(userGuess)) {
				alert("You already chose that letter");
				typedLetter = true;
			}
			else {
			if (userGuess === computerGuess) {
				displayLetter = "";
				wins++;
				$(".sidePic").attr("src", "assets/images/cleohappyreal.jpg");
				$(".soundControl").attr("src", "assets/audio/win.mp3");
				$(".winnerOrLoser").append("<h3>You win!! You guessed the letter " + userGuess + " and that IS the letter I was thinking of!!</h3>");
				console.log(wins);
				guesses = 8;
				compNum();
			}

			else {
				guesses--;
				console.log(guesses);
				console.log(wins);
				displayLetter = displayLetter + " " + userGuess + "";
				document.querySelector("#displayLetter").innerHTML = displayLetter;
			}

			if (guesses <= 0) {
				displayLetter = "";
				$(".sidePic").attr("src", "assets/images/cleomad.jpg");
				$(".soundControl").attr("src", "assets/audio/lose.mp3");
				$(".winnerOrLoser").append("<h3>You lose!!! Try Again by pressing another key.</h3>");
				losses++;
				guesses = 8;
				compNum();
				
			}
			

	// This is where I put the HTML modification code
	var html = 
	"<p>Guess the Letter!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Gueses Left: " + guesses + "</p>";
	document.querySelector("#displayHtml").innerHTML = html;
	typedLetter = true;
break;
}
}

}
if (typedLetter == false) {

alert("You did not enter a letter");
}
}

	


	

	