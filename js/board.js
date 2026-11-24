/* Board: acompaña el zoom del navegador */

const board = document.querySelector(".board");
const initialWidth = board.clientWidth;
const initialZoom = devicePixelRatio;

// Al hacer zoom in, el board mantiene su ancho inicial (que se ve más grande) y se recorre con scroll lateral.
// Sin zoom, o al hacer zoom out, se adapta solo a la pantalla.
addEventListener("resize", () => {
  if (devicePixelRatio > initialZoom) {
    board.style.setProperty("--board", `${initialWidth}px`);
  } else {
    board.style.removeProperty("--board");
  }
});
