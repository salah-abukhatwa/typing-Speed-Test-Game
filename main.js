

// Array of Words
const words = ['apple', 'banana', 'carrot', 'dog', 'elephant', 'flower', 'guitar', 'house', 'igloo', 'juggle', 'kite', 'lemon', 'mountain', 'night', 'octopus', 'pineapple', 'queen', 'robot', 'sunflower', 'tree'];

// Setting Levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};
// Default Level
let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeleftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreGscoreTotalot = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
