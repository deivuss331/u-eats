import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import config from 'config';
import 'i18n';

if (config.api.useMocks) {
  if (window.location.pathname === '/u-eats') {
    window.location.pathname = '/u-eats/';
  }

  require('./mocks/browser').default.start({
    serviceWorker: {
      url: '/u-eats/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass', // Hide warnings about unhandled (by MSW) requests
  });
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
