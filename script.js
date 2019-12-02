var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var question = document.getElementById("question");
var userAnswer = document.querySelector(".ansButton");
var timer = 150;
var score = 0;



startButton.addEventListener("click", startGame);


function startGame (){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    questionContainer.textContent = questions[0]
    

}

for (var i=0;i<questions.length;i++) {
    questionContainer.textContent = questions[0]




    
    
   
}

function checkAnswer () {
    if ( choice.choices.clicked_id === answers.a) {
        console.log("correct")
    } else {
        console.log("incorrect")
    }

}

/*listEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
      var item = document.createElement("div");
      item.textContent = groceries[event.target.parentElement.id];
      shoppingCartEl.append(item);
    }
  });*/

