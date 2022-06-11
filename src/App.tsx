import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppProviders from 'providers/AppProviders';
import { ScrollTopOnPathChange } from 'ui/helpers';
import routes, { appPaths } from 'routes';

function App(): JSX.Element {
  return (
    <AppProviders>
      <Router>
        <ScrollTopOnPathChange />
        <Routes>
          {routes.map(({ path, ...route }) => (
            <Route key={path} path={path} element={<route.component />} />
          ))}
          <Route path="*" element={<Navigate to={appPaths.root()} />} />
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;
