// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import config from 'config';

if (config.api.useMocks) {
  require('./mocks/server').default.start({
    onUnhandledRequest: 'bypass', // Hide warnings about unhandled (by MSW) requests
  });
}
