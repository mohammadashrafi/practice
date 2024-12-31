export function register() {
    window.addEventListener('DOMContentLoaded', async () => {
      if ('serviceWorker' in navigator) {
        const swUrl = `/sw.js`;
        navigator.serviceWorker.register(swUrl);
  }
    });
  }