const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("dark");
  } else {
    header.classList.remove("dark");
  }
});

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});
