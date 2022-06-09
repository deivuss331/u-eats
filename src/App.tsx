import AppProviders from 'providers/AppProviders';
import Homepage from 'views/Homepage';

function App(): JSX.Element {
  return (
    <AppProviders>
      <Homepage />
    </AppProviders>
  );
}

export default App;
