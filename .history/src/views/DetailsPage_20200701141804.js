import React, { Component } from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

class DetailsPage extends Component {
  state = {};

  render() {
    const { match } = this.props;

    return (
      <DetailsTemplate>
        <p>{`is twitter : ${match.path === routes.twitter}`}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
