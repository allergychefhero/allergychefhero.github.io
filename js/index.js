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
    document.getElementById("title").style.color = "red";
}


function charSelect(char){
    // if a character is already selected
    if (charSelected){
        charSelected.style.borderColor = "#00ffff";
        charSelected.getElementsByClassName("char-name")[0].style.display = "none";
        charSelected.getElementsByClassName("allergen")[0].style.display = "none";
        charSelected.getElementsByClassName("food-desc")[0].style.display = "none";
    }
    charSelected = char;
    char.getElementsByClassName("char-name")[0].style.display = "block";
    char.getElementsByClassName("allergen")[0].style.display = "block";
    char.getElementsByClassName("food-desc")[0].style.display = "block";
    char.style.borderColor = "red";
    activateButton();
}

//Activates start buttons
function activateButton() {
    document.getElementById("start-game").disabled = false;
    document.getElementById("start-game").style.backgroundColor = "#B9FD9C";
}
