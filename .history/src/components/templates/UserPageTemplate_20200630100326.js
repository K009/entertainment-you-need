import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';

const StyledGridWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
