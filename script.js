var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var question = document.getElementById("question");
var userAnswer = document.querySelector(".ansButton");
var newButtons = document.getElementById("answer-buttons");
var validate = document.getElementById("validate");
var button = document.getElementById("button");
var score = parseInt(document.getElementById("score").innerHTML);

/*startButton.addEventListener("click", startGame);


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
        score+=10;
        document.getElementById("score").innerHTML = score;
        validate.classList.add("correct")
        validate.innerHTML = "Correct"
        nextButton.classList.remove("hide");
    } else if (clicked_id != answers[0] && score == 0) {
        document.getElementById("score").innerHTML = score;
        validate.classList.add("incorrect")
        validate.innerHTML = "Incorrect"
        nextButton.classList.remove("hide");
    } else {
        score-=10;
        document.getElementById("score").innerHTML = score;
        validate.classList.add("incorrect")
        validate.innerHTML = "Incorrect"
        nextButton.classList.remove("hide");
    }
    };

    nextButton.addEventListener("click", next)

    function next() {
        validate.innerHTML = ""
        nextButton.classList.add("hide");
        for (var i=1; i<questions.length; i++) {
            question.innerHTML = questions[i];
        }
       
    };*/

    startButton.addEventListener("click", startGame);


    function startGame (){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    for (var i=0;i<questions.length;i++) {
    question.textContent = questions[0].title;
    answerButton1.textContent = questions[0].choices[0];
    answerButton2.textContent = questions[0].choices[1];
    answerButton3.textContent = questions[0].choices[2];
    answerButton4.textContent = questions[0].choices[3];
    }
};


    function replyClick(clicked_id){
    
    if (clicked_id == questions[0].answer) {
        score+=10;
        document.getElementById("score").innerHTML = score;
        validate.classList.add("correct")
        validate.innerHTML = "Correct"
        nextButton.classList.remove("hide");
    } else if (clicked_id != questions[0].answer && score == 0) {
        document.getElementById("score").innerHTML = score;
        validate.classList.add("incorrect")
        validate.innerHTML = "Incorrect"
        nextButton.classList.remove("hide");
    } else {
        score-=10;
        document.getElementById("score").innerHTML = score;
        validate.classList.add("incorrect")
        validate.innerHTML = "Incorrect"
        nextButton.classList.remove("hide");
    }
    };

    nextButton.addEventListener("click", next)

    function next() {
        validate.innerHTML = ""
        nextButton.classList.add("hide");
        for (var i=1; i++;) {
            alert(questions[i])
        }
       
    };






    

