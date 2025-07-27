window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 10) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});