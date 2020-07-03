import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  position: fixed;
`;

const NewItemBar = () => (
  <StyledWrapper>
    <Input placeholder="title" />
    <Input as="textarea" placeholder="title" />
    <Button>Add Note</Button>
  </StyledWrapper>
);

export default NewItemBar;
