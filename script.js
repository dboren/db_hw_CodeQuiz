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

var q1Text = document.createTextNode("Which of the following is not a javascript data type?");
var q2Text = document.createTextNode("When an html element is nested within another html element, the nested element is called the other element's ______.");
var q3Text = document.createTextNode("The following code '(var i = 0; i > array.length; i++)' is an example of a/an ______.");
var q4Text = document.createTextNode("Which method adds a new item to an existing array?")
var q5Text = document.createTextNode("What attribute does a # in a css selector target?")

var ans1Button = document.createElement("button");
var ans2Button = document.createElement("button");
var ans3Button = document.createElement("button");
var ans4Button = document.createElement("button");

var q2ans1Button = document.createElement("button");
var q2ans2Button = document.createElement("button");
var q2ans3Button = document.createElement("button");
var q2ans4Button = document.createElement("button");

var q2ans1ButtonText = document.createTextNode("child");
var q2ans2ButtonText = document.createTextNode("spinoff");
var q2ans3ButtonText = document.createTextNode("subset");
var q2ans4ButtonText = document.createTextNode("elementlet");

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

    ans1Button.addEventListener("click", inCorrectA1);
    ans2Button.addEventListener("click", inCorrectA1);
    ans3Button.addEventListener("click", inCorrectA1);

    
};

//When Q1 is answered correctly
function correctA1() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);

    question.textContent = "When an html element is nested within another html element, the nested element is called the other element's ______.";

    ans1Button.remove();
    ans2Button.remove();
    ans3Button.remove();
    ans4Button.remove();

    // var q2ans1Button = document.createElement("button");
    // var q2ans2Button = document.createElement("button");
    // var q2ans3Button = document.createElement("button");
    // var q2ans4Button = document.createElement("button");

    // var q2ans1ButtonText = document.createTextNode("child");
    // var q2ans2ButtonText = document.createTextNode("spinoff");
    // var q2ans3ButtonText = document.createTextNode("subset");
    // var q2ans4ButtonText = document.createTextNode("elementlet");

    ans1Row.appendChild(q2ans1Button);
    q2ans1Button.appendChild(q2ans1ButtonText);

    ans2Row.appendChild(q2ans2Button);
    q2ans2Button.appendChild(q2ans2ButtonText);

    ans3Row.appendChild(q2ans3Button);
    q2ans3Button.appendChild(q2ans3ButtonText);

    ans4Row.appendChild(q2ans4Button);
    q2ans4Button.appendChild(q2ans4ButtonText);

    // q2ans1Button.textContent = ("child");
    // q2ans2Button.textContent = ("spinoff");
    // q2ans3Button.textContent = ("subset");
    // q2ans4Button.textContent = ("elementlet");

    launchCentral.appendChild(resultLine);
    launchCentral.appendChild(resultEl);
    launchCentral.appendChild(resultText);
    resultText.textContent = "Correct!";

    // ans1Button.addEventListener("click", correctA2);

    // ans2Button.addEventListener("click", inCorrectA2);
    // ans3Button.addEventListener("click", inCorrectA2);
    // ans4Button.addEventListener("click", inCorrectA2);



};

//When Q1 is answered INcorrectly
function inCorrectA1() {
    currentScore = currentScore -3;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);
    secondsLeft = secondsLeft - 10;
    timerText.textcontent = ("Seconds remaining: " + secondsLeft);

    question.textContent = ("When an html element is nested within another html element, the nested element is called the other element's ______.");

    ans1Button.remove();
    ans2Button.remove();
    ans3Button.remove();
    ans4Button.remove();

    ans1Row.appendChild(q2ans1Button);
    q2ans1Button.appendChild(q2ans1ButtonText);

    ans2Row.appendChild(q2ans2Button);
    q2ans2Button.appendChild(q2ans2ButtonText);

    ans3Row.appendChild(q2ans3Button);
    q2ans3Button.appendChild(q2ans3ButtonText);

    ans4Row.appendChild(q2ans4Button);
    q2ans4Button.appendChild(q2ans4ButtonText);

    // ans1Button.textContent = ("child");
    // ans2Button.textContent = ("spinoff");
    // ans3Button.textContent = ("subset");
    // ans4Button.textContent = ("elementlet");

    launchCentral.appendChild(resultLine);
    launchCentral.appendChild(resultEl);
    launchCentral.appendChild(resultText);
    resultText.textContent = "Wrong!";

    // ans1Button.addEventListener("click", correctA2);

    // ans2Button.addEventListener("click", inCorrectA2);
    // ans3Button.addEventListener("click", inCorrectA2);
    // ans4Button.addEventListener("click", inCorrectA2);

};

//When Q2 is answered correctly
function correctA2() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);

    question.textContent = "The following code '(var i = 0; i > array.length; i++)' is an example of a/an ______.";

    ans1Button.textContent = ("initializer");
    ans2Button.textContent = ("iterator");
    ans3Button.textContent = ("bitrater");
    ans4Button.textContent = ("additive");

    resultText.textContent = "Correct!";

    ans2Button.addEventListener("click", correctA3);

    ans1Button.addEventListener("click", inCorrectA3);
    ans3Button.addEventListener("click", inCorrectA3);
    ans4Button.addEventListener("click", inCorrectA3);
};

//When Q2 is answered INcorrectly
function inCorrectA2() {
    currentScore = currentScore -3;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);
    secondsLeft = secondsLeft - 10;
    timerText.textcontent = ("Seconds remaining: " + secondsLeft);

    question.textContent = "The following code '(var i = 0; i > array.length; i++)' is an example of a/an ______.";

    ans1Button.textContent = ("initializer");
    ans2Button.textContent = ("iterator");
    ans3Button.textContent = ("bitrater");
    ans4Button.textContent = ("additive");

    resultText.textContent = "Wrong!";

    ans2Button.addEventListener("click", correctA3);

    ans1Button.addEventListener("click", inCorrectA3);
    ans3Button.addEventListener("click", inCorrectA3);
    ans4Button.addEventListener("click", inCorrectA3);

};

//When Q3 is answered correctly
function correctA3() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);

    question.textContent = "Which method adds a new item to an existing array?";

    ans1Button.textContent = (".split");
    ans2Button.textContent = (".plus");
    ans3Button.textContent = (".push");
    ans4Button.textContent = (".add");

    resultText.textContent = "Correct!";

    ans3Button.addEventListener("click", correctA4);

    ans1Button.addEventListener("click", inCorrectA4);
    ans2Button.addEventListener("click", inCorrectA4);
    ans4Button.addEventListener("click", inCorrectA4);


};

//When Q3 is answered INcorrectly
function inCorrectA3() {
    currentScore = currentScore -3;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);
    secondsLeft = secondsLeft - 10;
    timerText.textcontent = ("Seconds remaining: " + secondsLeft);

    question.textContent = "Which method adds a new item to an existing array?";

    ans1Button.textContent = (".split");
    ans2Button.textContent = (".plus");
    ans3Button.textContent = (".push");
    ans4Button.textContent = (".add");

    resultText.textContent = "Wrong!";

    ans3Button.addEventListener("click", correctA4);

    ans1Button.addEventListener("click", inCorrectA4);
    ans2Button.addEventListener("click", inCorrectA4);
    ans4Button.addEventListener("click", inCorrectA4);
};

//When Q4 is answered correctly
function correctA4() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);

    question.textContent = "What attribute does a # in a css selector target?";

    ans1Button.textContent = ("class");
    ans2Button.textContent = ("ID");
    ans3Button.textContent = ("href");
    ans4Button.textContent = ("alt");

    resultText.textContent = "Correct!";


};

//When Q4 is answered INcorrectly
function inCorrectA4() {
    currentScore = currentScore +5;
    scoreText.textContent = ("Current score: " + currentScore);
    console.log(currentScore);
    secondsLeft = secondsLeft - 10;
    timerText.textcontent = ("Seconds remaining: " + secondsLeft);

    question.textContent = "What attribute does a # in a css selector target?";

    ans1Button.textContent = ("class");
    ans2Button.textContent = ("ID");
    ans3Button.textContent = ("href");
    ans4Button.textContent = ("alt");

    resultText.textContent = "Wrong";


};

init();

startButton.addEventListener("click", startQuiz);