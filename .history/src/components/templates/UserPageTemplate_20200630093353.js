import React from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

export default UserPageTemplate;
