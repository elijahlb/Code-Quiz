var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var end = questions.length;
var question = document.getElementById("question");
var newButtons = document.getElementById("answer-buttons");
var validate = document.getElementById("validate");
var score = parseInt(document.getElementById("score").innerHTML);
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var index = 0;

/*----------------------------------------------- TIMER ------------------------------------ */
//Setting seconds and interval variables
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

//Function created to format minutes
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
  }

  //Function created to format seconds
function getFormattedSeconds() {
    //The % operator is a Modulus operator. Gives the remainder of seconds out of 60. We use 60 because there are 60 seconds in a min
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
  }

  //Function created to format setting the timer
function setTime() {
    //Set timer to  45 seconds
    var minutes = 0.75;
  
    clearInterval(interval);
    totalSeconds = minutes * 60;
  }

  //Function created to display the timer as it counts down
function renderTime() {
    //I created a span that displays minutes for you. 
    minutes.textContent = getFormattedMinutes();
    seconds.textContent = getFormattedSeconds();
  
    //If time runs out do the following
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }
  
  //Start timer function
  function startTimer() {
    setTime();
  
    interval = setInterval(function () {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }
  
  //Stop timer function
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }

//Function to subtract 10 seconds each time user answers incorrectly
function subtractTime() {
    secondsElapsed+=3;
  }
  
  
  /* ---------------------------------- END TIMER -------------------------------------  */


    startButton.addEventListener("click", startGame);


    function startGame (){
        //I put the start timer function here so that when a user clicks start, the timer starts as well
        startTimer();
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    question.textContent = questions[index].title;
        answerButton1.textContent = questions[index].choices[0];
        answerButton2.textContent = questions[index].choices[1];
        answerButton3.textContent = questions[index].choices[2];
        answerButton4.textContent = questions[index].choices[3]; 
};
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
        //I added the subtract time function here so that time is deducted when an answer is incorrect
    } 
    };

    nextButton.addEventListener("click", next)

    var nextCount = 0;
    nextButton.onclick = function() {
        nextCount+=1
    if (nextCount === 4) {
        var finalScore = (score + totalSeconds-secondsElapsed);
        
        alert(finalScore);
    }
    };

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

    
    