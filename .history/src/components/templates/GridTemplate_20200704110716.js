import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../components/atoms/Input/Input';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';
import withContext from '../../hoc/withContext';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import NewItemBar from '../organisms/NewItemBar/NewItemBar';
import plusIcon from '../../assets/icons/plus.svg';
import { render } from '@testing-library/react';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
`;

class GridTemplate extends React.Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToogle = () =>
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));

  render() {
    const { children, pageContext } = this.props;
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>2 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon icon={plusIcon} activeColor={pageContext} />
          <NewItemBar />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'note',
};

export default withContext(GridTemplate);
