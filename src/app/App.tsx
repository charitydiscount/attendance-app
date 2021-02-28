import React, { Suspense } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import LoadingIndicator from '../components/Loading/Loading';
import { theme } from './AppTheme';
import Welcome from '../components/Welcome/Welcome';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense
        fallback={
          <Box display="flex" height="100vh">
            <LoadingIndicator />
          </Box>
        }
      >
        <Welcome />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
