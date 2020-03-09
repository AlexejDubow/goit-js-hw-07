"use strict";

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// {/* <div id="controls"> */}
// <input type="number" min="0" max="100" step="1" />
// <button type="button" data-action="render">Создать</button>
// <button type="button" data-action="destroy">Очистить</button>
// </div>

const divBoxes = document.getElementById("boxes");
const inputRender = document.querySelector('[data-action="render"]');
const inputDestroy = document.querySelector('[data-action="destroy"]');
const inputAmount = document.querySelector('#controls > [type="number"]');
let startWidth = 20;
let startHeight = 20;

// let amount = Number(inputAmount.value);
// inputAmount.value = 4;
// console.log(inputAmount.value);

inputDestroy.addEventListener("click", destroyBoxes);
inputRender.addEventListener("click", appendBoxes);

function createColor() {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

function createBoxes(amount) {
  let divs = document.createElement("div");
  for (let i = 0; i < amount; i += 1) {
    startWidth = startWidth + 10;
    startHeight = startHeight + 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = `${startWidth}px`;
    newDiv.style.height = `${startHeight}px`;
    newDiv.style.backgroundColor = `${createColor()}`;
    divs.append(newDiv);
  }
  return divs;
}

// function createBoxes(amount) {
//   let newDiv;
//   // let divs = document.createElement("div");
//   for (let i = 0; i < amount; i += 1) {
//     startWidth = startWidth + 10;
//     startHeight = startHeight + 10;
//     newDiv = document.createElement("div");
//     newDiv.style.width = `${startWidth}px`;
//     newDiv.style.height = `${startHeight}px`;
//     newDiv.style.backgroundColor = `${createColor()}`;
//   //   // divs.append(newDiv);
//   }
//   return newDiv;
// }



function appendBoxes() {
  divBoxes.append(createBoxes(inputAmount.value));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
