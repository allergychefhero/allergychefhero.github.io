// globals
    let charSelected;

//Recipes stored in JSON
var recipeList = [
    {
      "recipe": "Seafood Pasta",
      "desc": "",
      "choices":
          [
            "Pasta",
            "Seafood",
            "Butter",
            "Tomatoes"
          ],
    },
    {
      "recipe": "Pancakes",
      "desc": "",
      "choices":
          [
            "Flour",
            "Eggs",
            "Non-dairy milk",
            "Syrup"
          ],
    }
];

function startGame() {
    // clears elements on page
    let div = document.getElementById('container');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
}


function charSelect(char){
    // if a character is already selected
    if (charSelected){
        charSelected.getElementsByClassName("char-name")[0].style.display = "none";
        charSelected.getElementsByClassName("speech-bubble")[0].style.display = "none";
        charSelected.getElementsByClassName("allergen")[0].style.display = "none";
        charSelected.getElementsByClassName("food-desc")[0].style.display = "none";
    }
    charSelected = char;
    char.getElementsByClassName("char-name")[0].style.display = "block";
    char.getElementsByClassName("speech-bubble")[0].style.display = "block";
    char.getElementsByClassName("allergen")[0].style.display = "block";
    char.getElementsByClassName("food-desc")[0].style.display = "block";
    activateButton();
}

//Activates start buttons
function activateButton() {
    document.getElementById("start-game").disabled = false;
    document.getElementById("start-game").style.backgroundColor = "#B9FD9C";
}
