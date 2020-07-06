import React, { Component } from 'react';
import DetailsTemplate from '../components/templates/DetailsTemplate';
import { routes } from '../routes/index';

class DetailsPage extends Component {
  state = {
    pageType: 'books',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.movie:
        this.setState({ pageType: 'movies' });
        break;
      case routes.book:
        this.setState({ pageType: 'books' });
        break;
      case routes.game:
        this.setState({ pageType: 'games' });
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
      gameUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    return (
      <DetailsTemplate
        pageType={this.state.pageType}
        title={dummyArticle.title}
        content={dummyArticle.content}
        movieTitle={dummyArticle.movieTitle}
        gameUrl={dummyArticle.gameUrl}
        created={dummyArticle.created}
      >
        <p>{this.setState.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
