import React from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

const DetailsPage = ({ match }) => (
  <>
    <DetailsTemplate />
    {console.log(match)}
  </>
);

export default DetailsPage;
