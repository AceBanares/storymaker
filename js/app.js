// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

let btnWord1 = document.querySelector('#idWord1');
let btnWord2 = document.querySelector('#idWord2');
let btnWord3 = document.querySelector('#idWord3');
let btnWord4 = document.querySelector('#idWord4');
let btnWord5 = document.querySelector('#idWord5');
let btnTellMyStory = document.querySelector('#tellMyStory');
let btnRandomStory = document.querySelector('#randomStory');

let word1 = ['The turkey','Mom','Dad','The dog', 'My teaher','The elephant', 'The cat'];
let word2 = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
let word3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let word4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let word5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

let myStory = ':word1: :word2: :word3: :word4: :word5:';

btnWord1.textContent = word1[0];
btnWord2.textContent = word2[0];
btnWord3.textContent = word3[0];
btnWord4.textContent = word4[0];
btnWord5.textContent = word5[0];

let ctrWord1 = 0;
let ctrWord2 = 0;
let ctrWord3 = 0;
let ctrWord4 = 0;
let ctrWord5 = 0;

/* Functions
-------------------------------------------------- */

function getRandom(array){
	return array[Math.floor(Math.random()*array.length)];
}

function speak(word) {
	let utterThis = new SpeechSynthesisUtterance(word);
	synth.speak(utterThis);
}

function speakWord1() {
	let currWord1 = word1[ctrWord1++%word1.length];
	speak(currWord1);
	btnWord1.textContent = currWord1;
}

function speakWord2() {
	let currWord2 = word2[ctrWord2++%word2.length];
	speak(currWord2);
	btnWord2.textContent = currWord2;
}

function speakWord3() {
	let currWord3 = word3[ctrWord3++%word3.length];
	speak(currWord3);
	btnWord3.textContent = currWord3;
}
function speakWord4() {
	let currWord4 = word4[ctrWord4++%word4.length];
	speak(currWord4);
	btnWord4.textContent = currWord4;
}
function speakWord5() {
	let currWord5 = word5[ctrWord5++%word5.length];
	speak(currWord5);
	btnWord5.textContent = currWord5;
}

function tellMyStory() {
	let theStory = myStory
	.replace(':word1:',btnWord1.textContent)
	.replace(':word2:',btnWord2.textContent)
	.replace(':word3:',btnWord3.textContent)
	.replace(':word4:',btnWord4.textContent)
	.replace(':word5:',btnWord5.textContent);
	
	speak(theStory);
}

function randomStory() {
	let newStory = myStory
		.replace(':word1:',getRandom(word1))
		.replace(':word2:',getRandom(word2))
		.replace(':word3:',getRandom(word3))
		.replace(':word4:',getRandom(word4))
		.replace(':word5:',getRandom(word5));
	// Create a new speech object, attaching the string of text to speak
	// let utterThis = new SpeechSynthesisUtterance(newStory);
	// Actually speak the text
	// synth.speak(utterThis);
	speak(newStory);
	console.log(newStory);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
btnWord1.addEventListener('click',speakWord1);
btnWord2.addEventListener('click',speakWord2);
btnWord3.addEventListener('click',speakWord3);
btnWord4.addEventListener('click',speakWord4);
btnWord5.addEventListener('click',speakWord5);
btnTellMyStory.addEventListener('click',tellMyStory);
btnRandomStory.addEventListener('click',randomStory);
