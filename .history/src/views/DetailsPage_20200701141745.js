import React, {Component} from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

class DetailsPage extends Component {
  state = {

  };

  const {match} = this.props;
  render() {

    return(  <DetailsTemplate>
      <p>{`is twitter : ${match.path === routes.twitter}`}</p>
    </DetailsTemplate>)

  }
};

export default DetailsPage;
