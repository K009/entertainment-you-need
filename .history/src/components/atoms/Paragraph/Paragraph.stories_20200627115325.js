import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module)
  .add('Normal', () => <Paragraph>Hello Dominik</Paragraph>)
  .add('big', () => <Paragraph big>Hello Dominik</Paragraph>);
