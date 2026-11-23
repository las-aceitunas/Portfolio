/* Comportamiento común a todas las páginas: menú móvil, animaciones e íconos */

const menuButton = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

function setMenu(open) {
  mobileNav.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuButton.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
  lucide.createIcons();
}

menuButton.addEventListener("click", () => setMenu(!mobileNav.classList.contains("open")));

// Al tocar un enlace que lleva a otra parte de la página, se cierra el menú
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", () => setMenu(false)));

// Aparición suave de los elementos con la clase "reveal"
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }
}), { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

lucide.createIcons();
