const els = document.querySelectorAll('.anim');
const animStart = 3;
// const timeout = 150;

function calculateOffset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animOnScroll() {
  for (let i = 0; i < els.length; i += 1) {
    const el = els[i];
    const elHeight = el.offsetHeight;
    const elOffset = calculateOffset(el).top;
    const decrement = elHeight > window.innerHeight ? window.innerHeight : elHeight;

    const elPoint = window.innerHeight - decrement / animStart;

    if ((window.pageYOffset > elOffset - elPoint) && window.pageYOffset < (elOffset + elHeight)) {
      el.classList.add('_active');
    } else if (!el.classList.contains('.anim-once')) el.classList.remove('_active');
  }
}

if (els.length > 0) window.addEventListener('scroll', animOnScroll);
setTimeout(animOnScroll, 1500);
