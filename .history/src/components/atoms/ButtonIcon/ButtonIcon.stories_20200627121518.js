import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

storiesOf('ButtonIcon', module)
  .add('Normal', () => <ButtonIcon icon={bulbIcon} />)
  .add('Normal', () => <ButtonIcon icon={logoutIcon} />)
  .add('Normal', () => <ButtonIcon icon={penIcon} />)
  .add('Normal', () => <ButtonIcon icon={plusIcon} />)
  .add('Normal', () => <ButtonIcon icon={twitterIcon} />);
