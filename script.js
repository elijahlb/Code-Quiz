var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var question = document.getElementById("question");
var userAnswer = document.querySelector(".ansButton");
var validate = document.getElementById("validate");
var button = document.getElementById("button");
var score = 0;

startButton.addEventListener("click", startGame);


function startGame (){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    question.textContent = questions[0];
    answerButton1.textContent = choice[0][0];
    answerButton2.textContent = choice[0][1];
    answerButton3.textContent = choice[0][2];
    answerButton4.textContent = choice[0][3];
    
};

    function replyClick(clicked_id){
    for (var i=0; i<answers.length; i++) {
    }
    if (clicked_id == answers[0]) {
        alert('')
         
    }
    }




