// globals
    let choiceSelected;


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
		nextPage(); 
	}
}

function nextPage(){
	document.getElementById('quiz-action-btn').style.display="inline-block";
  document.getElementById('quiz-action-btn').innerHTML="DONE";
  document.getElementById('quiz-action-btn').style.backgroundColor = "#B9FD9C";
}

function next() {
  location.replace("thankyou_dani.html")
}

//Activates start buttons
/* function quizProgression() {
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
} */
