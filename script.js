var currentScore = 0;
var secondsLeft = 100;

var pageHeader = document.createElement("div");
var highScoresLink = document.createElement("A");
var highScoresLinkText = document.createTextNode("View high scores");

var timerEl = document.createElement("p");
var timerText = document.createTextNode("Seconds remaining:" + secondsLeft);

function init() {
    document.body.appendChild(pageHeader);
    pageHeader.appendChild(highScoresLink);
    highScoresLink.setAttribute("href", "HighScores.html");
    highScoresLink.appendChild(highScoresLinkText);

    pageHeader.appendChild(timerEl);
    timerEl.appendChild(timerText);


    };

init();