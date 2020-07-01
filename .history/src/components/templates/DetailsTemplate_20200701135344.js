import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    {children}
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
