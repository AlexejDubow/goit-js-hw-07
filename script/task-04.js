"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// let counterValue = document.querySelector("#value");
let counterValue = 0;

const counter = document.querySelector("#value");

const btnAddCounter = document.querySelector("#counter > button:last-child");

const btnDecCounter = document.querySelector("#counter > button:first-child");

btnAddCounter.addEventListener("click", addCounter);

btnDecCounter.addEventListener("click", decCounter);

function addCounter() {
  counterValue += 1;

  counter.textContent = counterValue;
}
function decCounter() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
