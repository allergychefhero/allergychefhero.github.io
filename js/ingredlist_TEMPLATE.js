// globals
    let choiceSelected;

function startGame() {
    // clears elements on page
    let div = document.getElementById('container');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
}


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function validate() { 
	document.getElementById('quiz-action-btn').style.display="none";
	var checked = 0; 
	var chks = document.getElementsByTagName("INPUT"); 
	for (var i = 0; i < chks.length; i++) {
		if (chks[i].checked) { 
			checked++; 
		} 
	}
	if(checked==chks.length) { 
		console.log("WOOPEEE") 
		nextPage(); 
	}
}

function nextPage(){
	document.getElementById('quiz-action-btn').style.display="inline-block";
  document.getElementById('quiz-action-btn').innerHTML="DONE";
  document.getElementById('quiz-action-btn').style.backgroundColor = "#B9FD9C";
}



//Activates start buttons
function quizProgression() {
  let btnText = document.getElementById('quiz-action-btn').innerHTML; 
  //if quiz completed successfully
  if(btnText == 'Start! &gt;' || btnText == '←'){
    //Clear page contents to prepare for next story page
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
    }
  }
}
