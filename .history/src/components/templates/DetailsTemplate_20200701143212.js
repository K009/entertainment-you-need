import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <h1>hello</h1>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
