// change nav color on click
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
});

// change nav color on scroll
function onScroll() {
  const currentPosition = window.scrollY;
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu__item a');

  sections.forEach((segment) => {
    if (segment.offsetTop - 120 <= currentPosition
          && (segment.offsetTop + segment.offsetHeight - 100) > currentPosition) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (segment.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active');
        }
      });
    }
  });
}
document.addEventListener('scroll', onScroll);

// anchor links scrolling
const navLinks = document.querySelectorAll('nav a');

Array.from(navLinks).forEach((navLink) => {
  const href = navLink.getAttribute('href');
  const section = document.querySelector(href);
  const offset = 50 + 20; // nav and offset

  // eslint-disable-next-line no-param-reassign
  navLink.onclick = (e) => {
    // get body position
    const bodyRect = document.body.getBoundingClientRect().top;
    // get section position relative
    const sectionRect = section.getBoundingClientRect().top;
    // subtract the section from body
    const sectionPosition = sectionRect - bodyRect;
    // subtract offset
    const offsetPosition = sectionPosition - offset;

    e.preventDefault();
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
});

// document.querySelector('#top').onclick = e => {
//   e.preventDefault();
//   window.scrollTo({top: 0, behavior: 'smooth'});
// }
