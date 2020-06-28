import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../Theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Dominik</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
