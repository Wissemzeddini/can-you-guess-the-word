//define the global variables
var guessWord="";
var newVal = "";
var player = "1";

//steup the guess word
function setup() {
	document.getElementById('word').disabled = true;
	guessWord = document.getElementById('word').value;
	for (var i = 0; i < guessWord.length; i++) {
		newVal=newVal+"*";
	}
	document.getElementById('word').value= newVal;
	document.getElementById('setup').disabled = true;
}

//replace lettre in word by the index
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//verify the lettre in word and replace if exist
function key(lettre){
	for (var i = 0; i < guessWord.length; i++) {
		if (guessWord[i] == lettre) {
			newVal = newVal.replaceAt(i, lettre);
			console.log(newVal);
		}
	}
	document.getElementById('word').value = newVal;
	document.getElementById(lettre).className = "yellow";
	if (player == "1") {
		var val = document.getElementById('pl1').value;
		val = parseInt(val)+1;
		document.getElementById('pl1').value=val;
		player = "2";
	}
	else{
		var val = document.getElementById('pl2').value;
		val = parseInt(val)+1;
		document.getElementById('pl2').value=val;
		player = "1";
	}
}

//reload the page
function load(){
	location.reload();
}