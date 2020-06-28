import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <h1>notes</h1>
      <h1>twitters</h1>
      <h1>articles</h1>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
