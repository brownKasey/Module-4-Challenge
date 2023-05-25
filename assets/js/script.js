var startButton = document.querySelector(".start");
var timerElement = document.querySelector(".timer");
var answerBtns = document.querySelector(".answer");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionEl = document.querySelector(".question");

//shows previous highscores
var score = 0;
var highscores;


//timer variables
var timer;
var timerCount;

function startGame (){
    /*Starts condition for playing the game*/


    timerCount = 75;
    startButton.disabled = true;
    hideStart();
    showQuestions();
    getQ3();
   // playGame();
    startTimer();
};
//store the questions into objects along with the answers and the correct answer
var question0 = {
    question: "Commonly used data types do not include what answer?",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correct: "answer2",
}
var question1 = {
    question: "The condition in an if/else statement is enclosed with _________.",
    answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", ],
    correct: "answer3",
}
var question2 = {
    question: "A very useful tool used during development and deugging for printing content to the debugger is:",
    answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log", ],
    correct: "answer4",
}
var question3 = {
    question: "String values must be enclosed within _________ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis", ],
    correct: "answer3",
}
var question4 = {
    question: "Arrays in Javascript can be used to store _________.",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", ],
    correct: "answer4",
}

//stores all questions into an array
var allQuestions = [question0, question1, question2, question3, question4];



function playGame(event){
    event.preventDefault();

    var userInput = //something
    getQ0()
    if (userInput === allQuestions.question0.answers[0]){
        showCorrect();
        getQ1();
    } else 
        showWrong();
        return;


}
function hideQuestion(){

}
//functions to print questions and answers to html
function getQ0(){
    var question0 = {
        question: "Commonly used data types do not include what answer?",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "answer2",
    }
    questionEl.textContent = question0.question;
    answer1.textContent = question0.answers[0];
    answer2.textContent = question0.answers[1];
    answer3.textContent = question0.answers[2];
    answer4.textContent = question0.answers[3];
};
function getQ1(){
    var question1 = {
        question: "The condition in an if/else statement is enclosed with _________.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", ],
        correct: "answer3",
    }
    questionEl.textContent = question1.question;
    answer1.textContent = question1.answers[0];
    answer2.textContent = question1.answers[1];
    answer3.textContent = question1.answers[2];
    answer4.textContent = question1.answers[3];
};
function getQ2(){
    var question2 = {
        question: "A very useful tool used during development and deugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log", ],
        correct: "answer4",
    }
    questionEl.textContent = question2.question;
    answer1.textContent = question2.answers[0];
    answer2.textContent = question2.answers[1];
    answer3.textContent = question2.answers[2];
    answer4.textContent = question2.answers[3];
};
function getQ3(){
    var question3 = {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis", ],
        correct: "answer3",
    }
    questionEl.textContent = question3.question;
    answer1.textContent = question3.answers[0];
    answer2.textContent = question3.answers[1];
    answer3.textContent = question3.answers[2];
    answer4.textContent = question3.answers[3];
};
function getQ4(){
    var question4 = {
        question: "Arrays in Javascript can be used to store _________.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", ],
        correct: "answer4",
    }
    questionEl.textContent = question4.question;
    answer1.textContent = question4.answers[0];
    answer2.textContent = question4.answers[1];
    answer3.textContent = question4.answers[2];
    answer4.textContent = question4.answers[3];
};










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
        if (document.querySelector("#input").value == ""){

        }
    }

};*/

//hides option element
function hideOption(){
    var correct = document.querySelector(".option");
    var optionDisplaySetting = correct.style.display;
    if (optionDisplaySetting !== "none"){
        correct.style.display = "none";
    };
}
//displays option element
function showOption(){
    var option = document.querySelector(".option");
    var optionDisplaySetting = option.style.display;
    if (optionDisplaySetting !== "block"){
        correct.style.display = "block";
    };
}
// shows correct when answer is correct
function showCorrect(){
    var correct = document.querySelector(".option");
    correct.textContent = "Correct";
    showOption();
    var timerEl = 1;
    var timerInt = setInterval(function (){
        timerEl--;
        if (timerEl === 0){
            clearInterval(timerInt);
            hideOption();
            timerEl = 1;
        };
    }, 1000)
}
// shows wrong when answer is wrong
function showWrong(){
    var wrong = document.querySelector(".option");
    wrong.textContent = "Wrong!";
    showOption();
    var timerEl = 1;
    var timerInt = setInterval(function (){
        timerEl--;
        if (timerEl === 0){
            clearInterval(timerInt);
            hideOption();
            timerEl = 1;
        };
    }, 1000)
}

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
function showQuestions() {
    //grabs the qna id
    var questions = document.getElementById("qna");

    //grabs the display setting
    var qDisplaySetting = questions.style.display;

    //shows the element
    if(qDisplaySetting !== "block"){
        questions.style.display = "block";
    };
};


function startTimer() {
    //sets timer
    timer = setInterval( function() {
        timerCount--;
        timerElement.textContent = timerCount;
        //set win condition




        //set lose condition
        if (timerCount === 0) {
            clearInterval(timer);
            /*sends you to enter name for highscore*/
        }
    }, 1000)
};

//notes



//starts the game when clicking start
startButton.addEventListener("click", startGame);
answerBtns.addEventListener("click" )
