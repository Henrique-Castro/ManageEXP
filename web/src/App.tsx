import React from 'react';
import { ThemeProvider } from 'styled-components';

// Global Styles
import GlobalStyle from './styles/global';

import { LightTheme } from './styles/themes';

// Fonts Configuration
import './styles/fontconfig.css';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
