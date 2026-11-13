/* ---------- SETTINGS: edit these ---------- */
const SITE_TITLE = "carlo haltrich";        // <-- the title shown top left on every page
const HOME_LINK  = "index.html";        // where clicking the title goes
const TITLE_COLOR = "#ffffff";
const TITLE_SIZE  = "1.5rem";
const HEADER_PADDING = "1.5rem 2rem";   // space around the title (top/bottom, left/right)
/* ------------------------------------------ */

(function () {
  const style = document.createElement("style");
  style.textContent = `
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: ${HEADER_PADDING};
      z-index: 1000;
      pointer-events: none;   /* header floats over the page without blocking it */
    }
    .site-header a {
      pointer-events: auto;   /* but the title itself is clickable */
      color: ${TITLE_COLOR};
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: ${TITLE_SIZE};
      font-weight: 600;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);
    }
    .site-header a:hover { opacity: 0.75; }
    .site-header a:focus-visible { outline: 3px solid ${TITLE_COLOR}; outline-offset: 4px; }
  `;
  document.head.appendChild(style);

  const header = document.createElement("header");
  header.className = "site-header";
  const link = document.createElement("a");
  link.href = HOME_LINK;
  link.textContent = SITE_TITLE;
  header.appendChild(link);
  document.body.prepend(header);

  document.title = SITE_TITLE;      // also sets the browser tab title
})();
