// globals
    let choiceSelected;

function startGame() {
    // clears elements on page
    let div = document.getElementById('container');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
}


function selectChoice(choice){
    const ct = choice.classList.contains("ct");

    if(!choiceSelected){
      choiceSelected = choice;

      // if correct answer selected
      if(ct){
        choice.style.backgroundColor = "#CBF7B8";
        finishQuiz();
      }
      //if wrong answer
      else{
        choice.style.backgroundColor = "#FFCABA";
        tryAgain();
      }
    }
}

function tryAgain(){
  document.getElementById('quiz-action-btn').style.display = "inline-block";
  document.getElementById('quiz-action-btn').innerHTML="Try Again <big>↺</big>";
}

function finishQuiz() {
  document.getElementById('quiz-action-btn').style.display = "inline-block";
  document.getElementById('quiz-action-btn').innerHTML="Start! >";
  document.getElementById('quiz-action-btn').style.backgroundColor = "#B9FD9C";
}

//Activates start buttons
function quizProgression() {
  let btnText = document.getElementById('quiz-action-btn').innerHTML;
  // if next screen button pressed once quiz completed
  if(btnText == 'Start! &gt;'){
    window.location='ingredlist_CHARNAME.html';
    }
  //if try again-- wrong choice
  else{
    if(choiceSelected){
      choiceSelected.style.backgroundColor = "#ffffff";
      choiceSelected = undefined;
      document.getElementById('quiz-action-btn').style.display = "none";
    }
  }
}
