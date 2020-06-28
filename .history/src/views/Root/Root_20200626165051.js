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
    <h1>Hello Dominik</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
