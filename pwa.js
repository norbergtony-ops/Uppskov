(() => {
  'use strict';

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('./service-worker.js', { scope: './' });
      } catch (error) {
        console.warn('Kunde inte registrera offline-stöd:', error);
      }
    });
  }
})();
