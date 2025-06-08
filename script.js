const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navOverlay.classList.toggle('active');
});

// Optional: close menu when clicking the overlay
navOverlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
});
// Parallax scrolling effect

