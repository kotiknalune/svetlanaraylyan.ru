const lightbox = document.querySelector('.lightbox');
const menu = document.querySelector('.menu');
const burger = document.getElementById('burger');

let opened = false;

const toggleBurger = () => {
  lightbox.classList.toggle('lightbox-opened');
  burger.classList.toggle('burger-opened');
  menu.classList.toggle('menu-opened');
  opened = !opened;
};

burger.addEventListener('click', toggleBurger);

// TODO: remove panel once link or not-panel is clicked
