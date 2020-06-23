import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/auth';

// Global Styles
import GlobalStyle from './styles/global';

import { LightTheme } from './styles/themes';

// Fonts Configuration
import './styles/fontconfig.css';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
