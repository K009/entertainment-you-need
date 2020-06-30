import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import Input from '../../components/atoms/Input/Input';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div``;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input search /> <Heading>Notes</Heading> <Paragraph>2 notes</Paragraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </StyledGrid>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
