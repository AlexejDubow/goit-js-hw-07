"use strict";

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelectorAll("#categories > .item");

// ***********method #1**********

console.log(`В списке ${categories.length} категории.`);

categories.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.innerHTML}`);
  console.log(
    `Количество элементов: ${item.querySelectorAll("ul > li").length}`
  );
});

// ********Task-01 method #2*****************

// const allCategories = Array.from(categories);
// const allCategories = [...categories];
// const allCategories = new Array(...categories);

// console.log(`В списке ${allCategories.length} категории.`);

// allCategories.map((item) => {
//   console.log(`Категория: ${item.querySelector("h2").innerHTML}`);
//   console.log(
//     `Количество элементов: ${item.querySelectorAll("ul > li").length}`
//   );
// });
