var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var question = document.getElementById("question");
var userInput = document.getElementById("add-info");
var newButtons = document.getElementById("answer-buttons");
var validate = document.getElementById("validate");
var score = parseInt(document.getElementById("score").innerHTML);
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var index = 0;

// TIMER  
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var formattedMinutes;
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }  
    return formattedMinutes;
  };

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
    var formattedSeconds;
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
  };


function setTime() {
    var minutes = 0.75;
    clearInterval(interval);
    totalSeconds = minutes * 60;
  };

function renderTime() { 
    minutes.textContent = getFormattedMinutes();
    seconds.textContent = getFormattedSeconds();
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  };
  
  function startTimer() {
    setTime();
    interval = setInterval(function () {
      secondsElapsed++;
      renderTime();
    }, 1000);
  };
  
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  };

function subtractTime() {
    secondsElapsed+=3;
  };
  
  
  // END TIMER  


    startButton.addEventListener("click", startGame);

// Begins quiz
    function startGame (){
        startTimer();
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    question.textContent = questions[index].title;
        answerButton1.textContent = questions[index].choices[0];
        answerButton2.textContent = questions[index].choices[1];
        answerButton3.textContent = questions[index].choices[2];
        answerButton4.textContent = questions[index].choices[3]; 
};


    // Evaluates buttons clicked
    function replyClick(clicked_id){
    if (clicked_id == questions[index].answer) {
        score+=1;
        document.getElementById("score").innerHTML = score;
            validate.classList.add("correct")
            validate.innerHTML = "Correct"
            nextButton.classList.remove("hide");
        var hideButtons = document.querySelectorAll(".ansButton")
        for(var i=0;i<=hideButtons.length;i++) {
            hideButtons[i].setAttribute("disabled",true)
        };
    } else if (clicked_id != questions[index].answer) {
        document.getElementById("score").innerHTML = score;
            validate.classList.add("incorrect")
            validate.innerHTML = "Incorrect"
            nextButton.classList.remove("hide");
        var allButtons = document.querySelectorAll(".ansButton")
        for(var i=0;i<=allButtons.length;i++) {
            allButtons[i].setAttribute("disabled",true)
            subtractTime();
        };
    } 
    };

    


   // Ends Quiz ---- change nextCount in if statement to reflect any added quiz questions
    nextButton.addEventListener("click", next)
    var nextCount = 0;
    nextButton.onclick = function() {
        nextCount+=1
    if (nextCount === 4) {
        var finalScore = (score + totalSeconds-secondsElapsed);
        questionContainer.classList.add("hide")
        userInput.classList.remove("hide")
        document.getElementById('userScore').innerHTML = finalScore;
        var finalScore = (score + totalSeconds-secondsElapsed);
    }
    };

    // Saves score to local storage and sends to highscores dropdown
    function saveScore () {                   
        var li = document.createElement('li');  
        var ul = document.getElementById('ul')  
        ul.appendChild(li);                                     
        var input = document.getElementById("quiz-form");  
        var inputValue = input.value         
        localStorage.setItem("initials", inputValue);                 
        var initialInput = localStorage.getItem("initials") + ' : ' + document.getElementById("userScore").innerHTML;    
        li.textContent = initialInput   
    };

    // Next button function
    function next() {
        question.textContent = questions[index+=1].title;
            answerButton1.textContent = questions[index].choices[0];
            answerButton2.textContent = questions[index].choices[1];
            answerButton3.textContent = questions[index].choices[2];
            answerButton4.textContent = questions[index].choices[3]; 
        var allButtons = document.querySelectorAll(".ansButton")
        for(var i=0;i<=allButtons.length;i++) {
            allButtons[i].removeAttribute("disabled")
    }
    };

    // Restarts quiz
    function restart() {
        location.reload();
    }


    