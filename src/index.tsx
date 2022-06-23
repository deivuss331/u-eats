import React from 'react';
import { createRoot } from 'react-dom/client';
import AppProviders from 'providers/AppProviders';
import App from 'App';
import config from 'config';
import { APP_HOMEPAGE } from 'config/constants';
import 'i18n';

if (config.api.useMocks) {
  if (window.location.pathname === APP_HOMEPAGE) {
    window.location.pathname = `${APP_HOMEPAGE}/`;
  }

  require('./mocks/browser').default.start({
    serviceWorker: {
      url: `${APP_HOMEPAGE}/mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass', // Hide warnings about unhandled (by MSW) requests
  });
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
