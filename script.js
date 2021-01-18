var currentScore = 0;
var secondsLeft = 100;

var pageHeader = document.createElement("div");
var highScoresLink = document.createElement("A");
var highScoresLinkText = document.createTextNode("View high scores");

var timerEl = document.createElement("p");
var timerText = document.createTextNode("Seconds remaining:" + secondsLeft);

var launchCentral = document.createElement("div");
var launchHeader = document.createElement("h1");
var launchHeaderText = document.createTextNode("Quick Coding Quiz");

var explainerEl = document.createElement("p");
var explainerText = document.createTextNode("Click the start button to begin. You will have 100 seconds to complete the quiz. Additional time will be subtracted for incorrect answers.");

var startButton = document.createElement("button");
var startButtonText = document.createTextNode("START");

var question = document.createElement("h1");

var q1Text = document.createTextNode("Which of the following is not a javascript data type?")

var aButton1 = document.createElement("button");
var aButton2 = document.createElement("button");
var aButton3 = document.createElement("button");
var aButton4 = document.createElement("button");

function init() {
    document.body.appendChild(pageHeader);
    pageHeader.appendChild(highScoresLink);
    highScoresLink.setAttribute("href", "HighScores.html");
    highScoresLink.appendChild(highScoresLinkText);

    pageHeader.appendChild(timerEl);
    timerEl.appendChild(timerText);

    document.body.appendChild(launchCentral);
    launchCentral.appendChild(launchHeader);
    launchHeader.appendChild(launchHeaderText);
    launchCentral.appendChild(explainerEl);
    explainerEl.appendChild(explainerText);

    launchCentral.appendChild(startButton);
    startButton.appendChild(startButtonText);
    };

function startQuiz() {
    launchHeader.remove();
    explainerEl.remove();
    startButton.remove();
    
    secondsLeft = 0;

    launchCentral.appendChild(question);
    question.appendChild(q1Text);
}

init();

startButton.addEventListener("click", startQuiz);