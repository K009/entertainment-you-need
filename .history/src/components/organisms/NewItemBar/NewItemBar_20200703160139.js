import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
`;

const NewItemBar = () => (
  <StyledWrapper>
    <Input placeholder="title" />
    <Input as="textarea" placeholder="title" />
    <Button>Add Note</Button>
  </StyledWrapper>
);

export default NewItemBar;
