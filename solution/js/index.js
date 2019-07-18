'use strict';

const hideContainer = document.querySelector('.hide__container');
const hideButton = document.querySelector('.hide__button');

function clearTopHalf() {
  hideContainer.classList.toggle('hide__on');
}

hideButton.addEventListener('click', clearTopHalf);
