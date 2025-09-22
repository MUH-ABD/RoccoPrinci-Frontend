document.querySelectorAll(".nav-item").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeToggle.checked = true;
    }
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });
}

const yearSpan = document.querySelector(".year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "green";
    contactForm.reset();
  });
}
