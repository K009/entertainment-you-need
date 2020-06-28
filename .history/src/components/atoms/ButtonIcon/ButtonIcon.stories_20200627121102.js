import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

storiesOf('ButtonIcon', module).add('Normal', () => <ButtonIcon icon={bulbIcon} />);
