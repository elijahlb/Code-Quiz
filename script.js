var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var answerButton1 = document.getElementById("0");
var answerButton2 = document.getElementById("1");
var answerButton3 = document.getElementById("2");
var answerButton4 = document.getElementById("3");
var question = document.getElementById("question");
var newButtons = document.getElementById("answer-buttons");
var validate = document.getElementById("validate");
var score = parseInt(document.getElementById("score").innerHTML);
var index = 0;




/* TIMER */

var count = 60;


function counter () {
    count--;
    console.log(count)
    setInterval (counter, 1000);
        if (count <= 0) {
           alert("Your score is: " + count + score)
        }  
    document.getElementById('seconds').innerHTML = count;

}
  /* END TIMER   */


    startButton.addEventListener("click", startGame);


    function startGame (){
        counter();
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    question.textContent = questions[index].title;
    answerButton1.textContent = questions[index].choices[0];
    answerButton2.textContent = questions[index].choices[1];
    answerButton3.textContent = questions[index].choices[2];
    answerButton4.textContent = questions[index].choices[3]; 
  
};

    nextButton.addEventListener("click", next)

    function next() {
        question.textContent = questions[index+=1].title;
        answerButton1.textContent = questions[index].choices[0];
        answerButton2.textContent = questions[index].choices[1];
        answerButton3.textContent = questions[index].choices[2];
        answerButton4.textContent = questions[index].choices[3]; 
    };


    function replyClick(clicked_id){

        console.log("in reply")
       // answerButton1.setAttribute("disabled", true);
        /*var leng = document.getElementsByClassName("ansButton")
        console.log(leng)
        for(var i=0;i<=leng.length;i++) {
            leng.setAttribute("disabled",true)
        };*/
    //document.getElementsByClassName(".ansButton").disabled = true;
    if (clicked_id == questions[index].answer) {
        score+=1;
        document.getElementById("score").innerHTML = score;
        validate.classList.add("correct")
        validate.innerHTML = "Correct"
        nextButton.classList.remove("hide");
       

    } else if (clicked_id != questions[index].answer) {
        document.getElementById("score").innerHTML = score;
        validate.classList.add("incorrect")
        validate.innerHTML = "Incorrect"
        nextButton.classList.remove("hide");
        count = count-15;
   
    } 

    };

   






    

