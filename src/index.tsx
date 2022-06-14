import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import config from 'config';
import 'i18n';

if (config.api.useMocks) {
  require('./mocks/browser').default.start({
    onUnhandledRequest: 'bypass', // Hide warnings about unhandled (by MSW) requests
  });
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
