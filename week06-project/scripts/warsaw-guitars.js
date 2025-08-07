// HAMBURGER MENU BUTTON
const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamButton.classList.toggle('open');
});

//Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

//Last modified
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified: ${lastModified}`;