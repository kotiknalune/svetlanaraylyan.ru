const lightbox = document.querySelector('.lightbox');
const menu = document.querySelector('.menu');
const burger = document.getElementById('burger');

let opened = false;
const xOffset = () => 165 - 0.15 * window.innerWidth;

const toggleBurger = () => {
  lightbox.classList.toggle('lightbox-opened');
  burger.classList.toggle('burger-opened');
  menu.classList.toggle('menu-opened');
  burger.style.transform = !opened ? `translateX(${xOffset()}px)` : 'translateX(0)';
  opened = !opened;
};

burger.addEventListener('click', toggleBurger);

window.addEventListener('resize', () => {
  if (window.innerWidth > 700 && opened) toggleBurger();
  else if (opened) burger.style.transform = `translateX(${xOffset()}px)`;
});

const handleClick = (e) => {
  const { target } = e;
  if ((target !== burger) && (target !== lightbox) && (!target.classList.contains('menu__item')) && opened) toggleBurger();
};

document.addEventListener('click', (e) => { handleClick(e); });
