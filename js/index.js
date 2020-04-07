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
        charSelected.style.border="none";
    }

    foodDesc.style.display = "block";
    charSelected = char;
    charSelected.style.border = "dashed #333 3px";

    if(charSelected.classList.contains('shelly')){
        // change background colors
        speechBubble.style.backgroundColor = "#FFE5BA";
        foodDesc.style.backgroundColor = "#FFE5BA";
        // change text
        heading.innerHTML = "Shelly";
        speechBubble.innerHTML = "Hi there! Let's make <strong>seafood pasta!</strong>";
        foodDesc.innerHTML = "<img src='sprites/seafoods/seafoodpasta.png' width='100'><br>Shellfish-Free Seafood Pasta";
    }

    else if(charSelected.classList.contains('nick')){
        // change background colors
        speechBubble.style.backgroundColor = "#CEEDCF";
        foodDesc.style.backgroundColor = "#CEEDCF";
        // change text
        heading.innerHTML = "Nick";
        speechBubble.innerHTML = "Hey! Let's make an <strong>ice cream sundae</strong>.";
        foodDesc.innerHTML = "<img src='sprites/sundae.png' width='100'><br>Nut-Free Ice Cream Sundae";

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
        foodDesc.innerHTML = "<img src='sprites/pancakes.png' width='100'><br>Dairy-Free Pancakes";
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
