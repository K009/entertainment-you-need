import React from 'react';
import GridTemplate from '../components/templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        cardType="twitters"
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        twitterName={item.twitterName}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

export default Twitters;
