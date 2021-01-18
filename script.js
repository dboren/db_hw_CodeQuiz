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

var ans1Button = document.createElement("button");
var ans2Button = document.createElement("button");
var ans3Button = document.createElement("button");
var ans4Button = document.createElement("button");

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
    
    secondsLeft = 100;

    launchCentral.appendChild(question);
    question.appendChild(q1Text);

    var ansColumn = document.createElement("ol");
    
    var ans1Row = document.createElement("li");
    var ans2Row = document.createElement("li");
    var ans3Row = document.createElement("li");
    var ans4Row = document.createElement("li");

    var ans1ButtonText = document.createTextNode("Boolean");
    var ans2ButtonText = document.createTextNode("String");
    var ans3ButtonText = document.createTextNode("Array");
    var ans4ButtonText = document.createTextNode("Matrix");

    launchCentral.appendChild(ansColumn);

    ansColumn.appendChild(ans1Row);
    ans1Row.appendChild(ans1Button);
    ans1Button.appendChild(ans1ButtonText);

    ansColumn.appendChild(ans2Row);
    ans2Row.appendChild(ans2Button);
    ans2Button.appendChild(ans2ButtonText);

    ansColumn.appendChild(ans3Row);
    ans3Row.appendChild(ans3Button);
    ans3Button.appendChild(ans3ButtonText);

    ansColumn.appendChild(ans4Row);
    ans4Row.appendChild(ans4Button);
    ans4Button.appendChild(ans4ButtonText);
}

init();

startButton.addEventListener("click", startQuiz);