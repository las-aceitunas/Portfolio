/* Comportamiento de la página de inicio */

// En pantallas táctiles, el primer toque muestra la capa verde y el segundo abre el proyecto
document.querySelectorAll(".project-card").forEach(card => {
  card.querySelector("a").addEventListener("click", e => {
    if (matchMedia("(hover: none)").matches && !card.classList.contains("touched")) {
      e.preventDefault();
      document.querySelectorAll(".project-card.touched").forEach(c => c.classList.remove("touched"));
      card.classList.add("touched");
    }
  });
});

// Los enlaces viejos (index.html#proyecto-...) llevan a la página nueva del proyecto
const oldLink = location.hash.match(/^#proyecto-([a-z0-9-]+)$/);
if (oldLink) {
  const link = document.querySelector(`.project-card a[href="proyectos/${oldLink[1]}.html"]`);
  if (link) location.replace(link.href);
}
