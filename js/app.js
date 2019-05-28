// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

let speakButton = document.querySelector('button');


let word1 = ['The turkey','Mom','Dad','The dog', 'My teaher','The elephant', 'The cat'];
let word2 = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
let word3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let word4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let word5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

var myStory = ':word1: :word2: :word3: :word4: :word5:';

/* Functions
-------------------------------------------------- */

function getRandom(array){
	return array[Math.floor(Math.random()*array.length)];
}

function speakNow() {
	let newStory = myStory
		.replace(':word1:',getRandom(word1))
		.replace(':word2:',getRandom(word2))
		.replace(':word3:',getRandom(word3))
		.replace(':word4:',getRandom(word4))
		.replace(':word5:',getRandom(word5));
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(newStory);
	// Actually speak the text
	synth.speak(utterThis);
	console.log(newStory);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow();
}
