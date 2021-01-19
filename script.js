var currentScore = 0;
var secondsLeft = 100;

var pageHeader = document.createElement("div");
var highScoresLink = document.createElement("A");
var highScoresLinkText = document.createTextNode("View high scores");

var scoreEl = document.createElement("p");
var scoreText = document.createTextNode("Current score: " + currentScore);

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
var q2Text = document.createTextNode("When an html element is nested within another html element, the nested element is called the other element's ______.")

var ans1Button = document.createElement("button");
var ans2Button = document.createElement("button");
var ans3Button = document.createElement("button");
var ans4Button = document.createElement("button");

var ansColumn = document.createElement("ol");
    
var ans1Row = document.createElement("li");
var ans2Row = document.createElement("li");
var ans3Row = document.createElement("li");
var ans4Row = document.createElement("li");

var ans1ButtonText = document.createTextNode("Boolean");
var ans2ButtonText = document.createTextNode("String");
var ans3ButtonText = document.createTextNode("Array");
var ans4ButtonText = document.createTextNode("Matrix");

var resultLine = document.createElement("hr");
var resultEl = document.createElement("h2");
var resultText = document.createTextNode("");

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

function countDown() {
    setInterval(function(){
            secondsLeft--;
            timerText.textContent = "Seconds remaining: " + secondsLeft;  
        }, 1000) 
    };

// When start button is clicked 
function startQuiz() {
    launchHeader.remove();
    explainerEl.remove();
    startButton.remove();
    
    secondsLeft = 100;

    pageHeader.appendChild(scoreEl);
    scoreEl.appendChild(scoreText);

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

    countDown();
    console.log(secondsLeft);

    ans4Button.addEventListener("click", correctA1);

    
};

//When Q1 is answered correctly
function correctA1() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);

    question.appendChild(q2Text);

    ans1Button.textContent = ("child");
    ans2Button.textContent = ("spinoff");
    ans3Button.textContent = ("subset");
    ans4Button.textContent = ("elementlet");

    launchCentral.appendChild(resultLine);
    launchCentral.appendChild(resultEl);
    launchCentral.appendChild(resultText);
    resultText.textContent = "Correct!";


}

init();

startButton.addEventListener("click", startQuiz);