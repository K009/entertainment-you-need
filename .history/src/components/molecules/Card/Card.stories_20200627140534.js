import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Primary', () => <Card activeColor="primary" />)
.add('Secondary', () => <Card activeColor="secondary" />);
.add('Tertiary', () => <Card activeColor="tertiary" />);
