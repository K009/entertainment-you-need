import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello Dominik</h1>
      <Button>Close / Save</Button>
      <Button twitter>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
