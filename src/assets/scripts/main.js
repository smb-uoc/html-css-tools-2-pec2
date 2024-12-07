/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import VanillaTilt from 'vanilla-tilt';

/**
 * Write any other JavaScript below
 */

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");
}

themeToggleButton.addEventListener("click", toggleTheme);
