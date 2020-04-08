// globals
    let charSelected;

function startGame() {
    // Shelly storyline
    if(charSelected.classList.contains('shelly')){
        window.location="storylines/shelly/infoscreen_shelly.html";
    }

    // Nick storyline
    if(charSelected.classList.contains('nick')){
        window.location="storylines/nick/infoscreen_nick.html";
    }

    // Dani storyline
    if(charSelected.classList.contains('dani')){
        window.location="storylines/dani/infoscreen_dani.html";
    }
}


function charSelect(char){
    //local var declarations
    let heading = document.getElementById('heading');
    let speechBubble = document.getElementById('speech-bubble');
    let foodDesc = document.getElementById('food-desc');

    // if a character is already selected
    if (charSelected){
        charSelected.style.borderColor="TRANSPARENT";
    }

    foodDesc.style.display = "block";
    charSelected = char;
    charSelected.style.borderColor = "#070707";

    if(charSelected.classList.contains('shelly')){
        // change background colors
        speechBubble.style.backgroundColor = "#FFE5BA";
        foodDesc.style.backgroundColor = "#FFE5BA";
        // change text
        heading.innerHTML = "Shelly";
        speechBubble.innerHTML = "Hi there! Let's make <strong>seafood pasta!</strong>";
        foodDesc.innerHTML = "<img src='sprites/seafoods/seafoodpasta.png' height='100'>";
    }

    else if(charSelected.classList.contains('nick')){
        // change background colors
        speechBubble.style.backgroundColor = "#CEEDCF";
        foodDesc.style.backgroundColor = "#CEEDCF";
        // change text
        heading.innerHTML = "Nick";
        speechBubble.innerHTML = "Hey! Let's make an <strong>ice cream sundae</strong>.";
        foodDesc.innerHTML = "<img src='sprites/sundae.png' height='100'>";

        //***!!!***!!!***!!!***IMPORTANT***!!!***!!!***!!!***!!!
        //*** TAKE OUT 2 LINES BELOW WHEN NICK'S STORYLINE IS READY
        document.getElementById("start-game").disabled = true;
        document.getElementById("start-game").style.backgroundColor = "#ccc";

    }

    else if(charSelected.classList.contains('dani')){
        // change background colors
        speechBubble.style.backgroundColor = "#C4ECED";
        foodDesc.style.backgroundColor = "#C4ECED";
        // change text
        heading.innerHTML = "Dani";
        speechBubble.innerHTML = "We can make <strong>pancakes</strong> together!";
        foodDesc.innerHTML = "<img src='sprites/dairy/pancakes.png' height='100'>";
    }

    //***!!!***!!!***!!!***IMPORTANT***!!!***!!!***!!!***!!!
    //*** TAKE OUT 2 LINES BELOW WHEN NICK'S STORYLINE IS READY
    if (!charSelected.classList.contains('nick')){
        activateButton();
    }
}

//Activates start buttons
function activateButton() {
    document.getElementById("start-game").disabled = false;
    document.getElementById("start-game").style.backgroundColor = "#B9FD9C";
}
