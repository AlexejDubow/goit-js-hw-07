"se strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const li = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  return ingredient;
});
const ul = document.querySelector("#ingredients");
ul.append(...li);
