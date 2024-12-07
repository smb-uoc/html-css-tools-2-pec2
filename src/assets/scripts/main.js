import VanillaTilt from 'vanilla-tilt';

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");
}

themeToggleButton.addEventListener("click", toggleTheme);
