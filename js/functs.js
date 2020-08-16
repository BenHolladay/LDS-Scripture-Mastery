/* ************************************
	Author:			Ben Holladay
	AuthorEmail:	bwholladay@gmail.com
	Ward:			Morrisville Ward, Apex North Carolina Stake
	Date:			2018-May
 * ************************************/
var scriptNum = -1;	// the scripture index
var ansString = "";	// answer string displayed in the answer textarea
var numTries = 0;	// number of scriptures tested
var numCorrect = 0;	// number of scriptures correct
var numMemory = -1;	// used to eliminate several hits on correct answer

// set the scripture references in each cell of scripture.htm page
function loadReferences() {
	var cell = undefined;
	var text = "";
	for (var s = 0; s < 25; s++) {
		text = "s"+s;
		cell = document.getElementById("s" + s);
		cell.innerHTML += eval("S[" + s + "].ref");
	} // for
} // loadReferences

function showClue()	{
	var answerBlock = document.getElementById("answerBlock");
	var clueBlock = document.getElementById("clueBlock");

	if (numTries == numOfScripts)
	{
		var strAlert = "";	// used to build a dynamic alert message
		if (numCorrect < 6) strAlert = "OUCH...back to the books!  ";
		if ((numCorrect > 5) && (numCorrect < 11)) strAlert = "We have some work!  ";
		if ((numCorrect > 10) && (numCorrect < 21)) strAlert = "Pretty Good!  ";
		if ((numCorrect > 20) && (numCorrect < 25)) strAlert = "Well done!  ";
		if (numCorrect == 25) strAlert = "AMAZING!  ";

		alert(strAlert + "You knew " + numCorrect + " out of " + numOfScripts + " scriptures.  Press OK to start over.")
		for (var i = 0; i < numOfScripts; i++) {
	//		S[i][7] = false;
			S[i].displayed = false;
		} // for
		numTries = 0;
		numCorrect = 0;
		numMemory = 0;
		answerBlock.innerText = "";
	} // if
	scriptNum = Math.ceil(Math.random() * numOfScripts) - 1;
	//while(S[scriptNum][7] == true) {
	while(S[scriptNum].displayed == true) {
		scriptNum = (scriptNum + 1) % (numOfScripts);
	} // while
	numTries += 1;
	//S[scriptNum][7] = true;
	S[scriptNum].displayed = true;
	answerBlock.innerText = "";
//		clueBlock.innerText = S[scriptNum][fieldNum];
	clueBlock.innerText = eval("S[scriptNum]." + field);
} // showClue

function showRef(choice) {
	document.write(S[choice].ref);
} // showRef

function displayIt(choice) {
	var answerBlock = document.getElementById("answerBlock");

	if (scriptNum != -1) {
		if (choice == scriptNum) {
			if (numMemory != choice) {
				numCorrect++;
			} // if
//				ansString = "[" + numCorrect + ":" + numTries + "]  " + "CORRECT! -- The scripture is " + S[scriptNum][0] + " and reads...  ";
			ansString = "[" + numCorrect + ":" + numTries + "]  " + "CORRECT! -- The scripture is " + S[scriptNum].ref + " and reads...  ";
		}
		else {
//				ansString = "[" + numCorrect + ":" + numTries + "]  " + "Nope. -- The scripture is " + S[scriptNum][0] + " and reads...  ";
			ansString = "[" + numCorrect + ":" + numTries + "]  " + "Nope. -- The scripture is " + S[scriptNum].ref + " and reads...  ";
		} // if
//			ansString += S[scriptNum][1];
		ansString += S[scriptNum].text;
		answerBlock.innerText = ansString;
		numMemory = scriptNum;
		document.ScrTest.Go.value = "Click me again for the next clue!"
	} // if
} // displayIt

function clearWindow() {
	document.ScrTest.Answer.value = "";
} // clearWindow

function returnHome() {
	location.href = "./default.htm";
} // returnHome
