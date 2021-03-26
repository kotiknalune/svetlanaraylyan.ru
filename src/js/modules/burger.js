const lightbox = document.querySelector('.lightbox');
const menu = document.querySelector('.menu');
const burger = document.getElementById('burger');

let opened = false;
burger.addEventListener('click', () => {
  if (!opened) {
    lightbox.classList.add('lightbox-opened');
    burger.classList.add('burger-opened');
    menu.classList.add('menu-opened');
    opened = !opened;
  } else {
    lightbox.classList.remove('lightbox-opened');
    burger.classList.remove('burger-opened');
    menu.classList.remove('menu-opened');

    opened = !opened;
  }
});
