// globals
let choiceSelected;

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
  document.getElementById('quiz-heading').innerHTML="I’m allergic to shrimp.";
  document.getElementById('quiz-action-btn').innerHTML="Try Again <big>↺</big>";
}

function finishQuiz() {
  document.getElementById('quiz-heading').innerHTML="Great job!";
  let allergyStatement = document.getElementById('allergy-statement');
  allergyStatement.parentNode.removeChild(allergyStatement);
  document.getElementById('quiz-action-btn').innerHTML="Start! >";
  document.getElementById('quiz-action-btn').style.backgroundColor = "#B9FD9C";
}

//Activates start buttons
function quizProgression() {
  let btnText = document.getElementById('quiz-action-btn').innerHTML;
  console.log(btnText);
  //if quiz go back button pressed
  if(btnText == '←'){
    window.location='info_screen_Shelly.html';
  }

  // if next screen button pressed once quiz completed
  else if(btnText == 'Start! &gt;'){
    //window.location='HTMLPAGENAMEHERE.html';
    // clears elements on page-- ****take out code below once page written in above
    let div = document.getElementById('container');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
  }
  //if try again-- wrong choice
  else{
    if(choiceSelected){
      choiceSelected.style.backgroundColor = "#ffffff";
      choiceSelected = undefined;
      document.getElementById('quiz-action-btn').innerHTML="←";
      document.getElementById('quiz-heading').innerHTML="Which seafood can I eat?";
    }
  }
}
