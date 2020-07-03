import React from 'react';
import Card from '../components/molecules/Card/Card';
import GridTemplate from '../components/templates/GridTemplate';

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        cardType="notes"
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

export default Notes;
