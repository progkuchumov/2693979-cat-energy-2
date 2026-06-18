const buttonOpen = document.getElementById('js-button-open');
const menuOpen = document.getElementById('js-menu-open');

buttonOpen.onclick = function() {
  buttonOpen.classList.toggle('main-navigation__toggle--open');
  menuOpen.classList.toggle('main-navigation__list--open');
};

const slider = document.querySelector('.slider');
const before = slider.querySelector('.slider__slide--before');
const beforeImage = before.querySelector('.slider__image');
const change = slider.querySelector('.slider__change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  const width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  const shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

body.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return false;
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
}, { passive: false });
