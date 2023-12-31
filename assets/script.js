// All variables from HTML
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var quizContainer = document.querySelector(".quiz-container");
var displayContainer = document.getElementById("display-container");
var scoreContainer = document. querySelector(".score-container");
var userScore = document.getElementById("user-score");
var startScrn = document.querySelector(".start-screen");
var questionEl = document.getElementById("question");
var btnList = document.querySelector(".btn-list");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var timerBox = document.querySelector(".timer-box");
var userInput = document.getElementById("userInput");
var resultContainer = document.getElementById("result-container");

// variables that I am working with
var index = 0;
var score = 0;
var timeCounter;
var seconds = 60;
var userArray = [];
var answerResult = "";


// this function will start the quiz by starting the timer and displaying the first question once the start button is pressed
function startQuiz() {
    startScrn.classList.add("hide");
    quizContainer.classList.replace("hide", "show");
    timerBox.classList.replace("hide", "show");
    startTimer()
    displayQuestion()
}

// this function starts the timer
function startTimer(){
    timeCounter = setInterval(function (){
        seconds--
        var timer = document.getElementById("timer");
        timer.textContent = seconds;
        if(seconds == 0){
            endQuiz()
        }
    },1000)
}

function displayQuestion(){
    if(index === questionList.length){
        endQuiz();
    }
    questionEl.textContent = questionList[index].question;
    btn1.textContent = questionList[index].choice1;
    btn2.textContent = questionList[index].choice2;
    btn3.textContent = questionList[index].choice3;
    btn4.textContent = questionList[index].choice4;
}

// depending on the user answer choice, it will let the user know whether their answer is correct or not and then will display the next question
function checkAnswer(answer){
    answerResult = document.createElement("p");

    if(answer === questionList[index].correctAns){
        
        answerResult.textContent = "Hooray🎉 You are correct!";
        answerResult.style.color = "#fe7f2d";
        
        index++
        score++

        clearResult()
        
        displayQuestion() 
        
    }
    else{
        index++
        seconds -= 8

        displayQuestion()

        answerResult.textContent = "Wrong🤨 You are incorrect!";
        answerResult.style.color = "navy";
        
        
        clearResult()
    }
    
    resultContainer.appendChild(answerResult);
}

// this function clears the answer result of the previous question
function clearResult() {
   setTimeout( ()=> { 
    answerResult.textContent = "";
}, 500);

}


function endQuiz(){
    clearInterval(timeCounter);
    quizContainer.style.display = "none";
    scoreContainer.classList.replace("hide", "show");
    userScore.textContent = score;
}

function storage(initials){
    userArray = JSON.parse(localStorage.getItem("highscores")) || []
    if(initials !== ""){
        var user = {
            initials: initials,
            score: score,
        }
        userArray.push(user)
        localStorage.setItem("highscores", JSON.stringify(userArray))
        window.location.assign("score.html")
    } 
}

startBtn.addEventListener("click", startQuiz);
btnList.addEventListener("click", ()=>{
    var choice = this.event.target.textContent
    checkAnswer(choice)
})

submitBtn.addEventListener("click", ()=>{
    var userInitials = userInput.value
    storage(userInitials);
} )
