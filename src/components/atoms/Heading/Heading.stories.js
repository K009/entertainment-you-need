import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello Dominik</Heading>)
  .add('big', () => <Heading big>Hello Dominik</Heading>);
