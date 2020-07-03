import React from 'react';
import GridTemplate from '../components/templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { connect } from '../reducers/index';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles: articles };
};

export default connect(mapStateToProps)(Articles);
