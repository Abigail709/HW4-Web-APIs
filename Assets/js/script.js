var score = 0;
var penalty = 10;
var secondsLeft = 75;
var interval = 0;
var startButton = document.querySelector("#start-btn");
var prompt = document.querySelector("#prompt")
var currentTimer = document.querySelector("#timer");


startButton.addEventListener("click", startQuiz);

var question = document.querySelector("#questions");
console.log(question);
var option1El = document.querySelector("#choice1");
console.log(option1El);
var option2El = document.querySelector("#choice2");
console.log(option2El);
var option3El = document.querySelector("#choice3");
console.log(option3El);
var option4El = document.querySelector("#choice4");
console.log(option4El);


var finalScore = document.querySelector("#f-s")
finalScore.style.display = "none";
var finalScoreBoard = document.querySelector("#fs-out")
finalScoreBoard.style.display = "none"


option1El.style.display = "none";
option2El.style.display = "none";
option3El.style.display = "none";
option4El.style.display = "none";


var question1 = {
    question: "Which of the following tags is used to insert a blank line?",
    
    choice1: "<br>",
    choice2: "<hr>", 
    choice3: "<h1>", 
    choice4: "<p>",
        
    answer: "<br>"
}
var question2 = {
    question: "Images in your webpage may have the following extensions except",
    
    choice1: ".png",
    choice2: ".jpg", 
    choice3: ".gif", 
    choice4: ".psd",
        
   answer: ".psd"
}
var question3 = {
    question: "What does CSS stand for?",
        
    choice1: "Custom Style Sheets",
    choice2: "Computer Style Sheets", 
    choice3: "Cascading Style Sheets", 
    choice4: "Colorful Style Sheets",
        
    answer: "Cascading Style Sheets"
}
var question4 = {
    question: "The action of doing something over and over again, repeating code?",
        
    choice1: "code",
    choice2: "loop", 
    choice3: "bug", 
    choice4: "program",
        
    answer: "loop"
}
var question5 = {
    question: "Finding and fixing errors or mistakes in programs?",
       
    choice1: "debugging",
    choice2: "decomposing", 
    choice3: "looping", 
    choice4: "sequencing",
        
    answer: "debugging"
    
}

var questionArr = [question1, question2, question3, question4, question5];
var index = 0


function startQuiz() {
    startButton.style.display = "none"
    prompt.style.display = "none"
    countdown();
    render();
    
}


function countdown() {
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            currentTimer.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(interval);
                finish();
                currentTimer.textContent = "Time Up";
            }
        }, 1000);
    }
}



function render() {
   
    question.style.display = "block";
    option1El.style.display = "table-row";
    option2El.style.display = "table-row";
    option3El.style.display = "table-row";
    option4El.style.display = "table-row";

    
    if (index < questionArr.length) {
        question.textContent = questionArr[index].question;
        option1El.textContent = questionArr[index].choice1;
        option2El.textContent = questionArr[index].choice2;
        option3El.textContent = questionArr[index].choice3;
        option4El.textContent = questionArr[index].choice4;
        answer = questionArr[index].answer

        if (secondsLeft > 10) {
            option1El.onclick = function () {
                if (questionArr[index].choice1 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }

            option2El.onclick = function () {
                if (questionArr[index].choice2 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }

            option3El.onclick = function () {
                if (questionArr[index].choice3 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }

            option4El.onclick = function () {
                if (questionArr[index].choice4 == answer) {
                    score++
                    index++
                    render()
                } else {
                    secondsLeft = secondsLeft - 10
                }
            }
        } 
    } else {
       console.log('you made it through the quiz!')
       currentTime = 0
       finalScore.append(score)
       finish()
    }
}


 
function finish() {
    question.style.display = "none";
   option1El.style.display = "none";
   option2El.style.display = "none";
    option3El.style.display = "none";
   option4El.style.display = "none";
    finalScore.style.display = "table-row";
    finalScoreBoard.style.display = "table-row"

  



  
}




