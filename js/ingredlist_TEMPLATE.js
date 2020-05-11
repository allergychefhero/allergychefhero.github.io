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

function nextPage() {
	document.getElementById('quiz-action-btn').style.display="inline-block";
	document.getElementById('quiz-action-btn').innerHTML="DONE";
	document.getElementById('quiz-action-btn').style.backgroundColor = "#B9FD9C";
}

function next() {
  next_page_str ='thankyou_'.concat(document.getElementById('name').className,'.html');
  location.replace(next_page_str);
}
