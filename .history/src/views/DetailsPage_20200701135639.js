import React from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>`is twitter : ${match.path === routes.twitter}`</p>
  </DetailsTemplate>
);

export default DetailsPage;
