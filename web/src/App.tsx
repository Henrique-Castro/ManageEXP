import React from 'react';
import { ThemeProvider } from 'styled-components';

// Global Styles
import GlobalStyle from './styles/global';

import { LightTheme } from './styles/themes';

// Fonts Configuration
import './styles/fontconfig.css';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
