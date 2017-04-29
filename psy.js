/****************************************************
*****************************************************
Sam Cannon Homework 3.1 Psychic Game*****************
*****************************************************
****************************************************/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var keyPress;
var remainingGuesses;
var randNum = Math.random() * 26;
randNum = Math.round(randNum);
var compLetter;
var wins = 0;
var loses = 0;


//////////
////initial game load
/////////

window.onload =	function() {
	loadGame();
};

/////////
////load/reset game
////////

function loadGame() {

	remainingGuesses = 9;
	compLetter = alphabet[randNum];
	console.log(compLetter);

	/////grab elements
	
	
	/////create variable to inject into elements
	var winText = document.createTextNode(wins);
	var lossText = document.createTextNode(loses);
	var remGuessText = document.createTextNode(remainingGuesses);

	var p1 = document.getElementById("winCount");
	var p2 = document.getElementById("lossCount");
	var p3 = document.getElementById("remaining");
	
	////push textual info to elements
	p1.appendChild(winText);

	p2.appendChild(lossText);

	p3.appendChild(remGuessText);
	

//////////
////get input
/////////
	document.onkeyup = function(event) {

		var charCode = event.which || event.keyCode;
		var keyPress = String.fromCharCode(charCode).toLowerCase(); 
		//keyPress = keyPress.toLowerCase();
		var p4 = document.getElementById("guessList");
		var guessesText = document.createTextNode(", " + keyPress);
		

		p4.appendChild(guessesText);

		checkEntry(keyPress, compLetter);
		console.log(keyPress);

	};

/////////
////check input vs generated letter
/////////


	function checkEntry(entry, answer) {

		if(entry == answer) {

			alert("Great job Nostradamus!!! You got it right");
			wins += 1;
			remainingGuesses = 9;
			document.getElementById("winCount").innerHTML = "Wins: " + wins;
			document.getElementById("remaining").innerHTML = "Guesses Left: " + remainingGuesses;
			document.getElementById("guessList").innerHTML = "Your Guesses So Far: ";
			randNum = Math.random() * 26;
			randNum = Math.round(randNum);
			compLetter = alphabet[randNum];
			console.log(compLetter + 1);

		} else {

			if(remainingGuesses > 1) {

				remainingGuesses -= 1;
				document.getElementById("remaining").innerHTML = "Guesses Left: " + remainingGuesses;
				console.log(remainingGuesses);

			} else {
				alert("You lose, Mrs. Cleo!!!!");

				document.getElementById("guessList").innerHTML = "Your Guesses So Far: ";
				loses +=1;
				document.getElementById("lossCount").innerHTML = "Loses: " + loses;
				remainingGuesses = 9
				document.getElementById("remaining").innerHTML = "Guesses Left: " + remainingGuesses;
				randNum = Math.random() * 26;
				randNum = Math.round(randNum);
				compLetter = alphabet[randNum];
				console.log(compLetter + 2);
			}
		}

	};

	function newLetter() {

	};
};





