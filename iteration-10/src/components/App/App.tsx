import React, { Suspense } from 'react';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import { SmartSticky } from '@oplaner4/smart-sticky';

import Header from '../Header';
const People = React.lazy(() => import('../People'));
const PeopleFilter = React.lazy(() => import('../PeopleFilter'));
import Welcome from '../Welcome';

import CircularProgress from '@mui/material/CircularProgress';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    dark: PaletteOptions['primary'];
    fi: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0000dc',
      },
      secondary: {
        main: '#00006b',
      },
      light: {
        main: '#fafafa',
      },
      dark: {
        main: '#424242',
        contrastText: '#f5f5f5',
      },
      fi: {
        main: '#f2d45c',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{ bgcolor: 'light.main', overflowX: 'hidden' }}
        pb={3}
      >
        <SmartSticky
          show={{
            delay: 500,
            scrolling: {
              up: false,
            },
          }}
        >
          <Header />
        </SmartSticky>

        <Container
          component="main"
          sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 3 }}
        >
          <Welcome />

          <Suspense fallback={<CircularProgress color="secondary" />}>
            <SmartSticky
              show={{
                placement: { bottom: 10 },
                scrolling: {
                  up: true,
                  down: false,
                },
              }}
            >
              <PeopleFilter />
            </SmartSticky>
            <Box mt={4}>
              <People />
            </Box>
          </Suspense>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
