import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
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

const StyledLink = styled.a``;

const StyledImage = styled.img``;

const DetailsTemplate = ({ pageType, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      {pageType === 'twitters' && (
        <StyledImage
          alt={title}
          src="https://cdn1.toys4boys.pl/28222-large_default/skladany-robot-tobbie.jpg"
        />
      )}
      <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
        save/close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;