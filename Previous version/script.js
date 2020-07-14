// + GIVEN I am taking a code quiz 
// + WHEN I click the start button 
// + THEN a timer starts and I am presented with a question 
// + WHEN I answer a question
// +THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// 1.clock
var timeEl = document.querySelector(".time");
var secondsLeft = 120;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left ";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " TIME IS OVER";
}
setTime();

//2 . when click button start -transfer user on the page 'Questions"
//  done( also could be done with questions on one page using display options hide/display and a function start())


//3 . Create a complex array that has questions and answers and check you have an accsess

var questions = [ 
    {
      q: "Javascript variables are_______?",
          ans: {
         a: "containers for data",
          b:"descriptions of data" ,
          c:"possibly smth poisonous" ,
          d:"mysterious stuff" 
          },
          correct: "a"
        },

        { 
           q: "Creating new variables in javascript called ___?",
        ans: [
         "declaring",
         "announcing",
         "pronouncing" ,
         "just magic" 
        ],
        correct:"declaring"
      },
         {  q: "What Javascript arrays are used for",
        ans: [
        "take over a universe",
        "execute a special function",
        "store multiply values as a single variables",
         "they dont do anything" ],
         correct:"store multiply values as a single variables"
        },
        {
          q: "A JavaScript function is a ____",
              ans: {
             a: "containers for data",
              b:"block of code designed to perform a  task" ,
              c:"operating module" ,
              d:"mysterious stuff" 
              },
              correct: "b"
            },
            {
              q: "JavaScript Boolean represents:",
                  ans: {
                 a: "containers for data",
                  b:"execute a special function" ,
                  c:"two values: true or false" ,
                  d:"mysterious stuff" 
                  },
                  correct: "c"
                },
            {
           q: "Conditional statements are used to",
                      ans: {
                     a: "negotiate with unicorn",
                      b:"perform different actions based on different conditions" ,
                      c:"turn on the conditioner" ,
                      d:"call out the demons" 
                      },
                      correct: "b"
                    },
             {
                q: "Why do we need loops in JS?",
                          ans: {
                         a: "make everything complicated",
                          b:"to make JS more fun" ,
                          c:" execute a block of code a number of times" ,
                          d:"have no idea" 
                          },
                          correct: "c"
              },{
                q: "What is  scope in Java Script ?",
                           ans: {
                          a: "containers for data",
                           b:"descriptions of data" ,
                           c:"possibly smth poisonous" ,
                           d:" accessibility of variables" 
                           },
                           correct: "d"
                         }
      
      ]
    
     
    



console.log(questions[0]["q"])
console.log(questions[0]["ans"]["a"])
console.log(questions[0]["ans"]["b"])
console.log(questions[0]["ans"]["c"])
console.log(questions[0]["correct"])


// 4. structure of the quiz page should display question as h1 and 4 buttons with answers


var question = document.getElementById("quizQuestion")
var answerA = document.getElementById("btn1")
var answerB = document.getElementById("btn2")
var answerC = document.getElementById("btn3")
var answerD = document.getElementById("btn4")
var indexQ = 0;
var win=0
var lost=0
winScores=document.getElementById("winSc");
lostScores=document.getElementById("lostSc");


question.textContent = questions[0]["q"]
answerA.textContent = questions[0]["ans"]["a"]
answerB.textContent = questions[0]["ans"]["b"]
answerC.textContent = questions[0]["ans"]["c"]
answerD.textContent = questions[0]["ans"]["d"]



//5.When clicked any button, change the index of the question
function getNextQuestion(){
question.textContent = questions[indexQ]["q"]
answerA.textContent = questions[indexQ]["ans"]["a"]
answerB.textContent = questions[indexQ]["ans"]["b"]
answerC.textContent = questions[indexQ]["ans"]["c"]
answerD.textContent = questions[indexQ]["ans"]["d"]

}
 
answerA.addEventListener("click",checkTheAnswer);
answerB.addEventListener("click",checkTheAnswer);
answerC.addEventListener("click",checkTheAnswer);
answerD.addEventListener("click",checkTheAnswer);



function checkTheAnswer(event){
console.log(event.target.innerHTML)
  if (questions[indexQ]["correct"] = event.target.innerHTML){
    win++
    
  } else{
    lost++
    // secondsLeft-=4
  }
  winScores.textContent=win
  lostScores.textContent=lost

 indexQ++

if( questions.length > indexQ+1){
   getNextQuestion()
  } else {
    secondsLeft=0
    sendMessage()
    alert("Game over!")
  }
 
 }
 


//  6. When any of the buttons is clicked, page show a response and one second after will switch to a next question
//  7. Every button has a response -if answer = correct,it will respond with"You are right, dude!", else- nope!Next time, maybe"
//  8.if current choice = correct answer then  var correct++ , p with id response = "You are right, dude!"
//  9.else var wrong ++,  p with id response = "nope!Next time, maybe"
//  10. Have a counter for correct and wrong answers
// 11. After 5th question it will stop and switch to the "scores page with input for the initials
// 12.After user will enter initials, they will be stored in an array with his scores"
