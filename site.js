/* ---------- SETTINGS: edit these ---------- */
const SITE_TITLE = "carlo";        // <-- the title shown top left on every page
const HOME_LINK  = "index.html";        // where clicking the title goes

const CONTACT_TEXT = "contact";         // text on the contact button
const CONTACT_LINK = "contact.html";    // where the contact button goes
const CONTACT_POSITION = "right";       // "right" = top right corner, "left" = next to the title

const TITLE_COLOR = "#ffffff";
const TITLE_SIZE  = "1.5rem";
const HEADER_PADDING = "1.5rem 2rem";   // space around the header (top/bottom, left/right)
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
      display: flex;
      align-items: center;
      gap: 1.75rem;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      pointer-events: none;   /* header floats over the page without blocking it */
    }
    .site-header a {
      pointer-events: auto;   /* but the links themselves are clickable */
      color: ${TITLE_COLOR};
      text-decoration: none;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);
    }
    .site-header a:focus-visible { outline: 3px solid ${TITLE_COLOR}; outline-offset: 4px; }

    .site-title {
      font-size: ${TITLE_SIZE};
      font-weight: 600;
      letter-spacing: 0.04em;
    }
    .site-title:hover { opacity: 0.75; }

    .site-contact {
      padding: 0.45rem 1.1rem;
      border: 2px solid ${TITLE_COLOR};
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-shadow: none;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .site-contact:hover,
    .site-contact:focus-visible {
      background: ${TITLE_COLOR};
      color: #111;
    }
    .site-contact.right { margin-left: auto; }
  `;
  document.head.appendChild(style);

  const header = document.createElement("header");
  header.className = "site-header";

  const title = document.createElement("a");
  title.className = "site-title";
  title.href = HOME_LINK;
  title.textContent = SITE_TITLE;

  const contact = document.createElement("a");
  contact.className = "site-contact" + (CONTACT_POSITION === "right" ? " right" : "");
  contact.href = CONTACT_LINK;
  contact.textContent = CONTACT_TEXT;

  header.appendChild(title);
  header.appendChild(contact);
  document.body.prepend(header);

  document.title = SITE_TITLE;      // also sets the browser tab title
})();
