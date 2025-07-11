const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamButton.classList.toggle('open');
});