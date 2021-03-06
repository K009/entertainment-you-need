import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

const label = 'Colors';
const options = {
  Primary: 'hsl(49, 100%, 58%)',
  Secondary: 'hsl(196, 83%, 75%)',
  Tertiary: 'hsl(106, 47%, 64%)',
};

const defaultValue = 'hsl(49, 100%, 58%)',
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <Button>Hello Dominik</Button>)
  .add('Secondary', () => <Button secondary>Hello Natalie</Button>);
