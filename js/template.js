/**
 * Template Loader
 * Carica automaticamente header e footer in tutte le pagine
 */

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
    } else {
      console.error(`Elemento con id "${elementId}" non trovato`);
    }
    
  } catch (error) {
    console.error('Errore nel template:', error);
  }
}

// Carica i componenti quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
  loadTemplate('header-placeholder', 'components/header.html');
  loadTemplate('footer-placeholder', 'components/footer.html');
});     