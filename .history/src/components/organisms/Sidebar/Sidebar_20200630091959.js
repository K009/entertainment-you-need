import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const StyledWrapper = styled()``;

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
  <StyledWrapper>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to="/" icon={penIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/" icon={logoutIcon} activeClass="active" />
  </StyledWrapper>
);

export default Sidebar;
