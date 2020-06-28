import React from 'react';
import Button from '../../components/atoms/Button/Button';
import MainTemplate from '../../templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <h1>Hello Dominik</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  </MainTemplate>
);

export default Root;
