const burger = document.querySelector(".burger");
const navOverlay = document.querySelector(".nav-overlay");
const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".nav-links a");

function toggleMenu() {
  navOverlay.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Sluit menu bij klikken op een nav-link (alleen mobiel)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 900) {
      navOverlay.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

burger.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

