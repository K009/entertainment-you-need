import React, { Component } from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.notes:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
    }
  }

  render() {
    const { match } = this.props;

    return (
      <DetailsTemplate>
        <p>{this.setState.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
