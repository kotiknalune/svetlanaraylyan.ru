const scrollHeight = 50;

const adjustNavHeight = () => {
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
    document.querySelector('header').classList.add('shorten');
  } else {
    document.querySelector('header').classList.remove('shorten');
  }
};

window.onscroll = () => { adjustNavHeight(); };
