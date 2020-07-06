import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../components/templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Games = ({ games }) => (
  <GridTemplate pageType="games">
    {games.map((item) => (
      <Card
        cardType="games"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        id={item.id}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { games } = state;
  return { games: games };
};

export default connect(mapStateToProps)(Games);
