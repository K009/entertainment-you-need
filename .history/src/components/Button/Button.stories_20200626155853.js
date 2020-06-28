import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, selece } from '@storybook/addon-knobs';
import Button from './Button';

import { select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null,
};
const defaultValue = 'red';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

storiesOf('Button', module)
  .add('Primary', () => <Button>Hello Dominik</Button>)
  .add('Secondary', () => <Button secondary>Hello Natalie</Button>);
