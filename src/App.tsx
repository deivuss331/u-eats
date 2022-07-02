import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer, BasketOverviewBottomBar } from 'modules';
import { ScrollTopOnPathChange } from 'ui/helpers';
import { ScreenSizeLoader } from 'ui/layout';
import { APP_HOMEPAGE } from 'config/constants';
import routes, { appPaths } from 'routes';
import { usePrepareApp } from 'hooks';

function App(): JSX.Element {
  const isAppPrepared = usePrepareApp();

  if (!isAppPrepared) {
    return <ScreenSizeLoader />;
  }

  return (
    <Router basename={APP_HOMEPAGE}>
      <ScrollTopOnPathChange />
      <Header />
      <Routes>
        {routes.map(({ path, ...route }) => (
          <Route key={path} path={path} element={<route.component />} />
        ))}
        <Route path="*" element={<Navigate to={appPaths.root()} />} />
      </Routes>
      <BasketOverviewBottomBar />
      <Footer />
    </Router>
  );
}

export default App;
