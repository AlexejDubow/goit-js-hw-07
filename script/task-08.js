"use strict";

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const divBoxes = document.getElementById("boxes");
const inputRender = document.querySelector('[data-action="render"]');
const inputDestroy = document.querySelector('[data-action="destroy"]');
const inputAmount = document.querySelector('#controls > [type="number"]');

inputDestroy.addEventListener("click", destroyBoxes);
inputRender.addEventListener("click", appendBoxes);

function createColor() {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function createBoxes(amount) {
  let divCollection = [];
  let startWidth = 20;
  let startHeight = 20;

  for (let i = 0; i < amount; i += 1) {
    startWidth += 10;
    startHeight += 10;

    const newDiv = document.createElement("div");
    newDiv.style.width = `${startWidth}px`;
    newDiv.style.height = `${startHeight}px`;
    newDiv.style.backgroundColor = `${createColor()}`;
    divCollection.push(newDiv);
  }
  return divCollection;
}

function appendBoxes() {
  if ((inputAmount.value >= 0) & (inputAmount.value <= 100)) {
    divBoxes.append(...createBoxes(inputAmount.value));
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
