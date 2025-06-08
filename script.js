
  const burger = document.querySelector(".burger");
  const navOverlay = document.querySelector(".nav-overlay");
  const navMenu = document.querySelector(".nav-menu");
  const closeBtn = document.querySelector(".close-btn");

  function toggleMenu() {
    navOverlay.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  burger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
  navOverlay.addEventListener("click", toggleMenu); // ook sluiten bij klikken op overlay

