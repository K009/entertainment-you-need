import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('Primary', () => <Card />)
  .add('Secondary', () => <Card cardType="movies" />)
  .add('Tertiary', () => <Card cardType="games" />);
