"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById("validation-input");
function fn() {
  // console.log(input.value.length);
  // console.log(input.dataset.length)
    input.classList.add("invalid");
    input.classList.remove("valid");
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } 
  
}
input.addEventListener("blur", fn);
