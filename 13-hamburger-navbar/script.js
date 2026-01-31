const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const crossSign = document.querySelector(".cross-sign");

// Open menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.add("open");
});

// Close menu via cross button
crossSign.addEventListener("click", () => {
  navbar.classList.remove("open");
});

// Close menu when clicking a nav link
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && e.target !== hamburger) {
    navbar.classList.remove("open");
  }
});