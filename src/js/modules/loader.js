const loaderWrapper = document.getElementById('loader-wrapper');

const removeLoader = () => {
  loaderWrapper.querySelector('.section-left').classList.add('loaded');
  loaderWrapper.querySelector('.section-right').classList.add('loaded');
  loaderWrapper.querySelector('.loader').classList.add('loaded');

  setTimeout(() => {
    loaderWrapper.classList.add('loaded');
  }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(removeLoader, 1000);
});
