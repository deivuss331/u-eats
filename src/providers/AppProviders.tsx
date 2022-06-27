import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import { GlobalStyle, theme, muiTheme } from 'theme';
import { ScreenSizeLoader } from 'ui/layout';
import { stripe } from 'services';
import store from 'store';
import config from 'config';

import 'react-loading-skeleton/dist/skeleton.css';

interface AppProvidersProps {
  children: React.ReactNode;
}

const queryClient: QueryClient = new QueryClient(config.reactQuery);

function AppProviders({ children }: AppProvidersProps): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StoreProvider store={store}>
        <Elements stripe={stripe}>
          <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={muiTheme}>
              <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Toaster
                  position="top-right"
                  toastOptions={{
                    style: {
                      borderRadius: theme.borderRadius.base,
                    },
                  }}
                />
                <Suspense fallback={<ScreenSizeLoader />}>{children}</Suspense>
              </QueryClientProvider>
            </MuiThemeProvider>
          </ThemeProvider>
        </Elements>
      </StoreProvider>
    </HelmetProvider>
  );
}

export default AppProviders;
