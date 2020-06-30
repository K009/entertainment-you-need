import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const StyledLogoLink = styled()``;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => (
  <div>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon as={Link} to="/" icon={penIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={Link} to="/" icon={logoutIcon} />
  </div>
);

export default Sidebar;
