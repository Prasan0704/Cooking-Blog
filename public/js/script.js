let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

// Assume that you have already connected to the MongoDB database and retrieved the recipe data

function generateIngredientsList(recipeData) {
  const ingredientsList = document.getElementById("ingredients-list");
  
  for (let i = 0; i < recipeData.ingredients.length; i++) {
    const ingredient = recipeData.ingredients[i];
    const li = document.createElement("li");
    const qtySpan = document.createElement("span");
    qtySpan.classList.add("ingredient-qty");
    qtySpan.textContent = ingredient.quantity;
    li.appendChild(qtySpan);
    li.appendChild(document.createTextNode(" " + ingredient.name));
    ingredientsList.appendChild(li);
  }
}

function calculateIngredients() {
  const numPeople = parseInt(document.getElementById("num-people").value);
  const ingredientQtys = document.getElementsByClassName("ingredient-qty");

  for (let i = 0; i < ingredientQtys.length; i++) {
    const originalQty = ingredientQtys[i].textContent;
    const newQty = eval(originalQty * numPeople);
    ingredientQtys[i].textContent = newQty;
  }
}

// Assume that you have retrieved the recipe data from the database and stored it in a variable called "recipeData"
generateIngredientsList(recipeData);
