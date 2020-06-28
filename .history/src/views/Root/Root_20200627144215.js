import React from 'react';
import Button from '../../components/atoms/Button/Button';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <h1>Hello Dominik</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
