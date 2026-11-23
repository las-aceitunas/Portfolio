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

// Banda con texto deslizante: repite el texto hasta cubrir la pantalla y lo mueve sin fin
const tickerSpeed = 40; // píxeles por segundo
const tickerTrack = document.querySelector(".ticker-track");
const tickerText = tickerTrack.firstElementChild;

function setTicker() {
  const textWidth = tickerText.getBoundingClientRect().width;
  if (!textWidth) return;
  const copies = Math.ceil(innerWidth * 1.1 / textWidth);
  if (tickerTrack.children.length !== copies * 2) {
    tickerTrack.replaceChildren(tickerText);
    for (let i = 1; i < copies * 2; i++) tickerTrack.append(tickerText.cloneNode(true));
  }
  tickerTrack.style.animationDuration = `${tickerText.offsetWidth * copies / tickerSpeed}s`;
}

setTicker();
document.fonts.ready.then(setTicker);
addEventListener("resize", setTicker);
