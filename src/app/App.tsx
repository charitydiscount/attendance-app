import React, { Suspense } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import LoadingIndicator from '../components/Loading/Loading';
import { theme } from './AppTheme';
import './App.css';
import PageLayout from '../components/Layout/PageLayout';

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
        <PageLayout />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
