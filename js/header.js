/* Header del sitio: se edita acá y cambia en todas las páginas.

   Cómo se usa en cada HTML:
   - En index.html:               <site-header></site-header>
   - En páginas de proyectos/:    <site-header inicio="../index.html"></site-header>
*/

// Enlaces del menú (escritorio y celular). "seccion" es el id de la sección en index.html
const menuLinks = [
  { texto: "Proyectos", seccion: "proyectos" },
  { texto: "Nosotras", seccion: "nosotras" },
  // { texto: "Lado B", seccion: "lado-b" }, // LADO B oculto: descomentar cuando tenga contenido
  { texto: "Contacto", seccion: "contacto" },
];

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const inicio = this.getAttribute("inicio") || "";
    const links = menuLinks
      .map(link => `<a class="canva-link" href="${inicio}#${link.seccion}">${link.texto}</a>`)
      .join("");

    this.innerHTML = `
      <header class="site-header canva-header" id="site-header">
        <div class="header-inner">
          <a class="brand canva-link" href="${inicio || "#inicio"}" aria-label="Luz y Meme, volver al inicio">Luz <span>&amp;</span> Meme.</a>
          <nav class="desktop-nav canva-menu" aria-label="Navegación principal">${links}</nav>
          <button class="menu-toggle canva-button" id="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav"><i data-lucide="menu"></i></button>
        </div>
        <nav class="mobile-nav canva-menu" id="mobile-nav" aria-label="Navegación móvil">${links}</nav>
      </header>`;
  }
}

customElements.define("site-header", SiteHeader);
