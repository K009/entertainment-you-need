import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';

const theme = {
  primary: 'black',
};

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {' '}
      //podaje wszystkie propsy z theme do components ktora sa w nim
      <h1>Hello Dominik</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </ThemeProvider>
  </div>
);

export default Root;
