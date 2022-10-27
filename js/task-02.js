const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsList = document.querySelector("#ingredients");

const ingredientsItemsArray = [];

const ingredientsItem = ingredients.forEach((ingredient) => {
  const item = document.createElement("li");

  item.textContent = ingredient;
  item.classList.add("item");

  ingredientsItemsArray.push(item);
});

ingredientsList.append(...ingredientsItemsArray);

console.dir(ingredientsItemsArray);

