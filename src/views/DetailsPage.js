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
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { match } = this.props;

    return (
      <DetailsTemplate
        pageType={this.state.pageType}
        title={dummyArticle.title}
        content={dummyArticle.content}
        twitterName={dummyArticle.twitterName}
        articleUrl={dummyArticle.articleUrl}
        created={dummyArticle.created}
      >
        <p>{this.setState.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
