import './components/header-component.js';
import './components/navbar-component.js';
import './components/overlay-component.js';
import './components/footer-component.js';
import './components/event-component.js';

document
  .querySelector('navbar-component')
  .addEventListener('navigate', (event) => {
    const path = event.detail;
    loadPageContent(path);
  });

window.addEventListener('popstate', () => {
  loadPageContent(window.location.pathname);
});

function loadPageContent(path) {
  const mainContent = document.getElementById('main-content');
  const page = path === '/' ? '/home' : path;
  fetch(`src/pages${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      mainContent.innerHTML = html;
    })
    .catch((error) => {
      mainContent.innerHTML = '<h2>Page not found</h2>';
    });
}

loadPageContent(window.location.pathname);
