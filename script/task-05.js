"use strict";
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector("#name-input");

const nameUser = document.querySelector("#name-output");

function changeName() {
  // nameUser.innerHTML = inputName.value;
  // if (!inputName.value) {
  //   nameUser.innerHTML = "незнакомец";
  // }
  nameUser.innerHTML = inputName.value ? inputName.value : "незнакомец";
}
inputName.addEventListener("input", changeName);
