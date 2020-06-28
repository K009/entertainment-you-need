import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon icon={penIcon} />
      <ButtonIcon icon={twitterIcon} />
      <ButtonIcon icon={bulbIcon} />
    </div>
    <ButtonIcon icon={logoutIcon} />
  </div>
);

export default Sidebar;
