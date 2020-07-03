import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from '../components/templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Twitters = (props) => (
  <>
    <GridTemplate pageType="twitters">{console.log({ props })};</GridTemplate>
  </>
);

const mapStateToProps = (state) => {
  console.log(state);
  return { twitters: state };
};

export default connect(mapStateToProps)(Twitters);
/*    {twitters.map((item) => (
      <Card
        cardType="twitters"
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        twitterName={item.twitterName}
        key={item.id}
      />
    ))} */
