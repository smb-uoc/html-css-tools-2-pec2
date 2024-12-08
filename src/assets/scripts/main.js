/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import VanillaTilt from 'vanilla-tilt';

/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    if (currentLocation.includes(link.getAttribute('href'))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});

const form = document.getElementById('registrationForm');
const modal = new bootstrap.Modal(document.getElementById('confirmModal'));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    modal.show();
  } else {
    form.classList.add('was-validated');
  }
});
