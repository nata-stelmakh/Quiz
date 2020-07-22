// + GIVEN I am taking a code quiz
// + WHEN I click the start button
// + THEN a timer starts and I am presented with a question
// + WHEN I answer a question
// + THEN I am presented with another question
// + WHEN I answer a question incorrectly
// + THEN time is subtracted from the clock
// + WHEN all questions are answered or the timer reaches 0
// + THEN the game is over
//  WHEN the game is over
//  THEN I can save my initials and score

//1.Create an array ,that has questions and answers and check you have an accsess
var questions = [
  {
    q: "Javascript variables are_______?",
    ans: [
       "containers for data",
       "descriptions of data",
       "possibly smth poisonous",
       "mysterious stuff",
    ],
    correct: "containers for data",
  },

  {
    q: "Creating new variables in javascript called ___?",
    ans: ["declaring", "announcing", "pronouncing", "just magic"],
    correct: "declaring",
  },
  {
    q: "What Javascript arrays are used for",
    ans: [
      "take over a universe",
      "execute a special function",
      "store multiply values as a single variables",
      "they dont do anything",
    ],
    correct: "store multiply values as a single variables",
  },
  {
    q: "A JavaScript function is a ____",
    ans: [
       "containers for data",
      "block of code designed to perform a  task",
      "operating module",
      "mysterious stuff",
    ],
    correct: "block of code designed to perform a  task",
  },
  {
    q: "JavaScript Boolean represents:",
    ans: [
      "containers for data",
      "execute a special function",
      "two values: true or false",
      "mysterious stuff",
    ],
    correct: "two values: true or false",
  },
  {
    q: "Conditional statements are used to",
    ans: [
      "negotiate with unicorn",
      "perform different actions based on different conditions",
      "turn on the conditioner",
      "call out the demons",
    ],
    correct: "perform different actions based on different conditions",
  },
  {
    q: "Why do we need loops in JS?",
    ans: [
       "make everything complicated",
       "to make JS more fun",
       " execute a block of code a number of times",
       "have no idea",
    ],
    correct: " execute a block of code a number of times",
  },
  {
    q: "What is  scope in Java Script ?",
    ans: [
       "containers for data",
       "descriptions of data",
       "possibly smth poisonous",
       "accessibility of variables",
    ],
    correct: "accessibility of variables",
  },
];

console.log(questions[0]["q"]);
console.log(questions[0]["ans"][0]);
console.log(questions[0]["ans"][1]);
console.log(questions[0]["ans"][3]);
console.log(questions[0]["correct"]);

// var highscores = localStorage.getItem(key,initials)

//2.start function.
//should be evoked when user clicks button start
//Results of a function:
//start button will dissappear
//first question will be displayed
// choosing questions by index describing position in the array
var indexQ = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 80;
var win = 0;
var lost = 0;



$("#start").on("click", function () {
  $("h1").text("");
  $("h2").text("");
  $("#start").hide();
  $("#strangeth").hide();
  
  setTime();
  nextQuestion()
});

 //3.When user clicks any answer, then evokes function check the answer
 //if answer is correct, then it will deflect on amout of scores in var wins
 //if answer is wrong -var lost will increment and time will be substracted from the clock

  

function checkedAnswer() {
  console.log($(this));
  console.log($(this).text());

  

  if (questions[indexQ].correct == $(this).text()) {
     console.log(questions[indexQ].correct)
     console.log($(this).text())
    win++;
    console.log("You answered right"+win);
    $("#result").text("Your answer is correct!");
  } else {
    lost++;
    console.log("You answered wrong"+ lost);
    secondsLeft = secondsLeft-10
    $("#result").text("Nope,that one is wrong");
  }
  indexQ ++
   
  if( questions.length > indexQ+1){
    nextQuestion()
   } else {

    gameOver()
    secondsLeft === 0
       
   }
   return win
}
 
// 4 .After user chose an answer, app displays next question

 function nextQuestion(){
     $("#quiz").empty()
 //create an h3 with text content of a question
  $("<h3>").text(questions[indexQ]["q"]).appendTo("#quiz");

 //create four buttons with text content of an answers
  $("<button  class='btn btn-danger qBtn'>")
    .text(questions[indexQ].ans[0])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-danger qBtn'>")
    .text(questions[indexQ].ans[1])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-danger qBtn'>")
    .text(questions[indexQ].ans[2])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-danger qBtn'>")
    .text(questions[indexQ].ans[3])
    .appendTo("#quiz")
    .on("click", checkedAnswer);

 }

//5.Timer
var timerInterval

function setTime() {

  timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if (secondsLeft === 0) {
         gameOver()
         }
         
    }, 1000);
}

function gameOver(){
    clearInterval(timerInterval)
    $("#quiz").empty()
    $("#game-rules").hide()
    $("<button id='gameOver' class='btn'>").text("GAME OVER").appendTo("#quiz")
    $("<p>").text("Please click on the button to save your scores").appendTo("#quiz")
    
    $('#gameOver').on('click',function(event){
    $('#quiz').empty()
    $('<h1>').text("You've made it!!!").appendTo('#quiz')
    $('<p id="final_scores">').text('You scored '+ win + ' out of 8').appendTo('#quiz')  
    $('<div class=container style="width: 60%;">').appendTo('#quiz')
    $('<div class="input-group mb-3">  <input id =submitScores type="text" class="form-control" placeholder="Please enter your initials"  aria-describedby="basic-addon2"> <div class="input-group-append">  <button class="btn btn-outline-secondary" type="button" id="submit">').appendTo('.container')
    $('#submit').text('Submit')
  })

    
  }

  
  
  $('#submit').on("click",function(event){
  $('#submitscores').empty()
  console.log("Scores have been submitted")
  var initials =$(this).parent().siblings("input").val() ;
  var key = win;
  console.log(initials);
  console.log(key)

  var newScore ={score:win,name:initials}
  var highScores = JSON.parse(localStorage.getItem("highScores")) ||[]
  highScores.push(newScore)
  localStorage.setItem("highScores",JSON.stringify(highScores))
  $(this).parent().siblings("input").val("")
})

