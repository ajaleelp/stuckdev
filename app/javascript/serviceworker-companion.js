if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    console.log('Registering service worker...');
    navigator.serviceWorker.register('/serviceworker.js');
  });
}