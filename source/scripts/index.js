const buttonOpen = document.querySelector('.main-navigation__toggle');
const menuOpen = document.querySelector('.main-navigation__list');

if (document.querySelector('.slider')) {
  const slider = document.querySelector('.slider');
  const range = document.querySelector('.slider__range');

  range.addEventListener('input', () => {
    slider.style.setProperty('--value', `${range.value }%`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buttonOpen.classList.add('main-navigation__toggle--open');
  menuOpen.classList.add('main-navigation__list--close');
});

buttonOpen.onclick = function() {
  buttonOpen.classList.toggle('main-navigation__toggle--open');
  menuOpen.classList.toggle('main-navigation__list--close');
};
