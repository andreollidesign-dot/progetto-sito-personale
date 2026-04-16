/**
 * Template Loader
 * Carica automaticamente header e footer in tutte le pagine.
 *
 * Usa window.__headerLoaded come flag per evitare race condition:
 * se translations.js gira DOPO che il fetch è già completato,
 * può controllare il flag invece di aspettare l'evento.
 */

window.__headerLoaded = false;

async function loadTemplate(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Errore nel caricamento di ${filePath}: ${response.status}`);
    }
    const html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
      if (elementId === 'header-placeholder') {
        window.__headerLoaded = true;
        document.dispatchEvent(new Event('headerLoaded'));
      }
    } else {
      console.error(`Elemento con id "${elementId}" non trovato`);
    }
  } catch (error) {
    console.error('Errore nel template:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTemplate('header-placeholder', 'components/header.html');
  loadTemplate('footer-placeholder', 'components/footer.html');
});
