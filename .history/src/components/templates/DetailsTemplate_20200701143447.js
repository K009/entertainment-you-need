import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <Heading>hello</Heading>
    <Paragraph></Paragraph>
    <Button>x</Button>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
