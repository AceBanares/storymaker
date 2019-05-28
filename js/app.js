// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// Buttons for words
let btnWord1 = document.querySelector("#idWord1");
let btnWord2 = document.querySelector("#idWord2");
let btnWord3 = document.querySelector("#idWord3");
let btnWord4 = document.querySelector("#idWord4");
let btnWord5 = document.querySelector("#idWord5");

// Buttons for narration
let btnTellMyStory = document.querySelector("#tellMyStory");
let btnRandomStory = document.querySelector("#randomStory");

// Output space
let txtStory = document.querySelector("#txtStory");

// Array of available words or phrases
let word1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat"
];
let word2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let word3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let word4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let word5 = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes"
];

// Story element placeholders
let myStory = ":word1: :word2: :word3: :word4: :word5:";

// Set default labels of word buttons to the first word in each array
btnWord1.textContent = word1[0];
btnWord2.textContent = word2[0];
btnWord3.textContent = word3[0];
btnWord4.textContent = word4[0];
btnWord5.textContent = word5[0];

// Initialize counter for current word to 0 (to be used for navigating through each array)
let ctrWord1 = 0;
let ctrWord2 = 0;
let ctrWord3 = 0;
let ctrWord4 = 0;
let ctrWord5 = 0;

/* Functions
-------------------------------------------------- */

// Get random element in a given array
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Narrate a given word
function speak(word) {
  let utterThis = new SpeechSynthesisUtterance(word);
  synth.speak(utterThis);
}

// Narrate 1st word
function speakWord1() {
  // Array index is determined by counter that increments on each click
  // Modulus is used to rotate back to first index after the last index
  let currWord1 = word1[ctrWord1++ % word1.length];
  // Narrate word and update text content of the button
  speak(currWord1);
  btnWord1.textContent = currWord1;
}

// Narrate 2nd word
function speakWord2() {
  // Array index is determined by counter that increments on each click
  // Modulus is used to rotate back to first index after the last index
  let currWord2 = word2[ctrWord2++ % word2.length];
  // Narrate word and update text content of the button
  speak(currWord2);
  btnWord2.textContent = currWord2;
}

// Narrate 3rd word
function speakWord3() {
  // Array index is determined by counter that increments on each click
  // Modulus is used to rotate back to first index after the last index
  let currWord3 = word3[ctrWord3++ % word3.length];
  // Narrate word and update text content of the button
  speak(currWord3);
  btnWord3.textContent = currWord3;
}

// Narrate 4th word
function speakWord4() {
  // Array index is determined by counter that increments on each click
  // Modulus is used to rotate back to first index after the last index
  let currWord4 = word4[ctrWord4++ % word4.length];
  // Narrate word and update text content of the button
  speak(currWord4);
  btnWord4.textContent = currWord4;
}

// Narrate 5th word
function speakWord5() {
  // Array index is determined by counter that increments on each click
  // Modulus is used to rotate back to first index after the last index
  let currWord5 = word5[ctrWord5++ % word5.length];
  // Narrate word and update text content of the button
  speak(currWord5);
  btnWord5.textContent = currWord5;
}

function tellMyStory() {
  // Assign current words to the story element placeholders
  let theStory = myStory
    .replace(":word1:", btnWord1.textContent)
    .replace(":word2:", btnWord2.textContent)
    .replace(":word3:", btnWord3.textContent)
    .replace(":word4:", btnWord4.textContent)
    .replace(":word5:", btnWord5.textContent);
  // Narrate story and update text content of the output space
  speak(theStory);
  txtStory.textContent = theStory;
}

function randomStory() {
  // Assign random words to the story element placeholders
  let newStory = myStory
    .replace(":word1:", getRandom(word1))
    .replace(":word2:", getRandom(word2))
    .replace(":word3:", getRandom(word3))
    .replace(":word4:", getRandom(word4))
    .replace(":word5:", getRandom(word5));
  // Create a new speech object, attaching the string of text to speak
  // let utterThis = new SpeechSynthesisUtterance(newStory);
  // Actually speak the text
  // synth.speak(utterThis);
  // ^ Separate function is created for the commented codes above ^
  // Narrate story and update text content of the output space
  speak(newStory);
  txtStory.textContent = newStory;
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
btnWord1.addEventListener("click", speakWord1);
btnWord2.addEventListener("click", speakWord2);
btnWord3.addEventListener("click", speakWord3);
btnWord4.addEventListener("click", speakWord4);
btnWord5.addEventListener("click", speakWord5);
btnTellMyStory.addEventListener("click", tellMyStory);
btnRandomStory.addEventListener("click", randomStory);
