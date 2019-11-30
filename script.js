var startButton = document.getElementById("start-btn")
var questionContainer = document.getElementById("question-container")
var nextButton = document.getElementById("next-btn")
var answerButton1 = document.getElementById("ansBtn1")
var answerButton2 = document.getElementById("ansBtn2")
var answerButton3 = document.getElementById("ansBtn3")
var answerButton4 = document.getElementById("ansBtn4")
var question = document.getElementById("question")
var userAnswer = document.querySelector(".ansButton")


startButton.addEventListener("click", startGame);



function startGame (){
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");

    
}




var questions = [
    {   
        title : "Which of the following is correct about features of JavaScript?",
        choices : ["JavaScript is a lightweight, interpreted programming language.", 
        "JavaScript is designed for creating network-centric applications.", 
        "JavaScript is complementary to and integrated with Java.", "All of the above."],
        answer : "All of the above."
    },
    {   
        title : " Which of the following is a valid type of function javascript supports?",
        choices : ["named function", "anonymous function", "Both of the above", "None of the above"],
        answer : "Both of the above"
    },
    {   
        title : "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        choices : ["getIndex()", "location()", "indexOf()", "None of the above"],
        answer : "indexOf()"
    },
    {   
        title : "Which built-in method returns the characters in a string beginning at the specified location?",
        choices : ["substr()", "getSubstring()", "slice()", "None of the above"],
        answer : "substr()"
    },
    {   
        title : "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        choices : ["toSource", "valueOf()", "toString()", "None of the above"],
        answer : "toString()"
    },
    {   
        title : "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        choices : ["slice()", "split()", "replace()", "search()"],
        answer : "split()"
    },
    {   
        title : "Which of the following function of String object returns the calling string value converted to lower case?",
        choices : ["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
        answer : "toLowerCase"
    },
    {   
        title : "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
        choices : ["sup()", "small()", "strike()", "sub()"],
        answer : "strike()"
    },
    {   
        title : "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
        choices : ["concat()", "every()", "push()", "some()"],
        answer : "every()"
    },
    {   
        title : "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        choices : ["pop()", "push()", "reduce()", "reduceRight()"],
        answer : "reduceRight()"
    },
]

for (var i=0;i<choice.choices.length;i++) {
    answerButton1.textContent = choice.choices[0]
    answerButton2.textContent = choice.choices[1]
    answerButton3.textContent = choice.choices[2]
    answerButton4.textContent = choice.choices[3]
    question.textContent = questions.q

    
   
}
