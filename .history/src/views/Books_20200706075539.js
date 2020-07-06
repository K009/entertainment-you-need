import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/templates/GridTemplate';

const Books = ({ books }) => (
  <GridTemplate pageType="books">
    {books.map((item) => (
      <Card
        cardType="books"
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { books } = state;
  return { books: books };
};

export default connect(mapStateToProps)(Books);
