"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control");

const span = document.getElementById("text");

input.addEventListener("input", changeFontSize);

function changeFontSize() {
  span.style.fontSize = `${Number(input.value)}px`;
}
