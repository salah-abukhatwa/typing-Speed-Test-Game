

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
let scoreTotalot = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeleftSpan.innerHTML = defaultLevelSeconds;
scoreTotalot.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
    return false;
}

// Start Game
startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function
    genWord();
}
function genWord() {
     let randomWord = words[Math.floor(Math.random() * words.length)];
     // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    //Remove Word From Array
    words.splice(wordIndex, 1);
// show the random word
    theWord.innerHTML = randomWord;

    // Empty Upcoming Word
    upcomingWords.innerHTML = '';
    // Generate Words Upcoming
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
        
    }
    // Call Start Play Function
    startPlay()
    }
    
    function startPlay() {
        timeleftSpan.innerHTML = defaultLevelSeconds;
        let start = setInterval(() => {
            timeleftSpan.innerHTML--;
            if ( timeleftSpan.innerHTML === "0") {
                clearInterval(start);
                // Compare Words
                if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                    input.value = '';
                    scoreGot.innerHTML++;

                    if (words.length > 0) {
                        // call Generate function
                        genWord();
                    } else {
                          let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                        upcomingWords.remove();
                    }

                } else {
                    let span = document.createElement("span");
                    span.className = "bad";
                    let spanText = document.createTextNode("Game Over");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                }
            } 
        }, 1000);
    }