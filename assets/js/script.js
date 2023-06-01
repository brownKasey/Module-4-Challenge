//variables referncing html
var startButton = document.querySelector(".start");
var timerElement = document.querySelector(".timer");

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionEl = document.querySelector("#questionTitle");
var btns = document.getElementById("answer-btns");
var btns1 = document.getElementById("answer-btns");
var btns2 = document.getElementById("answer-btns");
var btns3 = document.getElementById("answer-btns");
var btns4 = document.getElementById("answer-btns");
var optionEl = document.getElementById("option");

//shows previous highscores
var score = 0;
var highscores;

// other



//timer variables
var timer;
var timerCount;
var counter = 0;
function startGame (){
    /*Starts condition for playing the game*/
    timerCount = 75;
    startButton.disabled = true;
    playGame();
    startTimer();
};
//store the questions into objects along with the answers and the correct answer
var questions = [];
var question0 = {
    question: "Commonly used data types do not include what answer?",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correct: "2. booleans",
};
questions.push(question0);

var question1 = {
    question: "The condition in an if/else statement is enclosed with _________.",
    answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", ],
    correct: "3. parenthesis",
};
questions.push(question1);

var question2 = {
    question: "A very useful tool used during development and deugging for printing content to the debugger is:",
    answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log", ],
    correct: "4. console.log",
};
questions.push(question2);
var question3 = {
    question: "String values must be enclosed within _________ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis", ],
    correct: "3. quotes",
};
questions.push(question3);
var question4 = {
    question: "Arrays in Javascript can be used to store _________.",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", ],
    correct: "4. all of the above",
};
questions.push(question4);


var currentQuestionIndex = 0;
var lastQuestionIndex = questions.length - 1;
var q = questions[currentQuestionIndex];


function playGame(event){
    hideStart();
    showQNA();
    showQ0();
}
function hideQuestion(){

}


//creates a button for each button element with answer class
var answerBtns = document.querySelectorAll(".answer");
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', checkAns)
};

function showQ0(){
    questionEl.textContent = question0.question;
    for(var i = 0; i < question0.answers.length; i++){
    var ansBtn = document.createElement("button")
    ansBtn.setAttribute("class", "answer")
    ansBtn.setAttribute("value", question0.answers[i])
    ansBtn.textContent = question0.answers[i];
    btns.appendChild(ansBtn);
    }
}
function showQ1(){
    questionEl.textContent = question1.question;
    for(var i = 0; i < question1.answers.length; i++){
    var ansBtn = document.createElement("button")
    ansBtn.setAttribute("class", "answer")
    ansBtn.setAttribute("value", question1.answers[i])
    ansBtn.textContent = question1.answers[i];
    btns1.appendChild(ansBtn);
    }
}
function showQ2(){
    questionEl.textContent = question2.question;
    for(var i = 0; i < question2.answers.length; i++){
    var ansBtn = document.createElement("button")
    ansBtn.setAttribute("class", "answer")
    ansBtn.setAttribute("value", question2.answers[i])
    ansBtn.textContent = question2.answers[i];
    btns2.appendChild(ansBtn);
    }
}
function showQ3(){
    questionEl.textContent = question3.question;
    for(var i = 0; i < question3.answers.length; i++){
    var ansBtn = document.createElement("button")
    ansBtn.setAttribute("class", "answer")
    ansBtn.setAttribute("value", question3.answers[i])
    ansBtn.textContent = question3.answers[i];
    btns3.appendChild(ansBtn);
    }
}
function showQ4(){
    questionEl.textContent = question4.question;
    for(var i = 0; i < question4.answers.length; i++){
    var ansBtn = document.createElement("button")
    ansBtn.setAttribute("class", "answer")
    ansBtn.setAttribute("value", question4.answers[i])
    ansBtn.textContent = question4.answers[i];
    btns4.appendChild(ansBtn);
    }
}


function checkAns0(event){
    var wrong = 10;
    var userInput = event.target.value;
    var right0 = question0.correct;
    console.log(right0);
    if (userInput === right0){
        showCorrect();

    }else{
        timerCount = timerCount - wrong;
        timerElement.textContent = timerCount;
        showWrong();
    };
};
function checkAns1(event){
    var wrong = 10;
    var userInput = event.target.value;
    var right1 = question1.correct;
    if (userInput === right1){
        showCorrect();

    }else{
        timerCount = timerCount - wrong;
        timerElement.textContent = timerCount;
        showWrong();
    };
}
function checkAns2(event){
    var wrong = 10;
    var userInput = event.target.value;
    var right2 = question2.correct;
    if (userInput === right2){
        showCorrect();

    }else{
        timerCount = timerCount - wrong;
        timerElement.textContent = timerCount;
        showWrong();
    };
}
function checkAns3(event){
    var wrong = 10;
    var userInput = event.target.value;
    var right = question3.correct;
    if (userInput === right){
        showCorrect();

    }else{
        timerCount = timerCount - wrong;
        timerElement.textContent = timerCount;
        showWrong();
    };
}
function checkAns4(event){
    var wrong = 10;
    var userInput = event.target.value;
    var right = question4.correct;
    if (userInput === right){
        showCorrect();

    }else{
        timerCount = timerCount - wrong;
        timerElement.textContent = timerCount;
        showWrong();
    };
}







//hides game over screen
function hidegameOver(){
    var game = document.querySelector(".gameover");
    var gDisplaySetting = game.style.display;
    if (gDisplaySetting !== "none"){
        game.style.display = "none";
    };
};
//shows game over screen
function showgameOver(){
    var game = document.querySelector(".gameover");
    var gDisplaySetting = game.style.display;
    if (gDisplaySetting !== "block"){
        game.style.display = "block";
    };
};

/*function gameOver(){
    showgameOver();
    document.querySelector("submit").addEventListener("click", function () {
    }

};*/

//hides option element
function hideOption(){
    var optionDisplaySetting = optionEl.style.display;
    if (optionDisplaySetting !== "none"){
        optionEl.style.display = "none";
    };
}
//displays option element
function showOption(){
    var optionDisplaySetting = optionEl.style.display;
    if (optionDisplaySetting !== "block"){
        optionEl.style.display = "block";
    };
}
// shows correct when answer is correct
function showCorrect(){
    showOption();
    optionEl.textContent = "Correct";
    var timerEl = 1;
    var timerInt = setInterval(function (){
        timerEl--;
        if (timerEl === 0){
        hideOption();
        };
    }, 1000)
}
// shows wrong when answer is wrong
function showWrong(){
   optionEl.textContent = "Wrong!";
    showOption();
    var timerEl = 1;
    var timerInt = setInterval(function (){
        timerEl--;
        if (timerEl === 0){
        hideOption();
        };
    }, 1000)
}
//hides start
function hideStart(){
    //grabs the starting page id
    var startPage = document.getElementById("starting-page");

    //grabs the display setting
    var startDisplaySetting = startPage.style.display;
    //hides startPage
    if(startDisplaySetting !== "none"){
        startPage.style.display = "none";
    };
};
//shows questions
function showQNA() {
    //grabs the qna id
    var questions = document.getElementById("qna");

    //grabs the display setting
    var qDisplaySetting = questions.style.display;

    //shows the element
    if(qDisplaySetting !== "block"){
        questions.style.display = "block";
    };
};

//starts timer
function startTimer() {
    //sets timer
    timer = setInterval( function() {
        timerCount--;
        timerElement.textContent = timerCount;
        //set win condition




        //set lose condition
        if (timerCount <= 0) {
            clearInterval(timer);
            /*sends you to enter name for highscore*/
        }
    }, 1000)
};

//notes



//starts the game when clicking start
startButton.addEventListener("click", startGame);
btns.addEventListener("click", checkAns0);
btns1.addEventListener("click", checkAns1);
btns2.addEventListener("click", checkAns2);
btns3.addEventListener("click", checkAns3);
btns4.addEventListener("click", checkAns4);
