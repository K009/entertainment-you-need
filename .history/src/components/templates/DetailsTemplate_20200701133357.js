import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>Lorem ipsum lala</p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
