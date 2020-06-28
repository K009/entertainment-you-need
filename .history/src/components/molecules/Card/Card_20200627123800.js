import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 17px 30px;
`;

const Card = () => (
  <StyledWrapper>
    <Heading>Hello Dominik</Heading>
    <Paragraph>Lorem ipsum lalala i wanna play piano all the time. This is great!</Paragraph>
    <Button>Click me</Button>
  </StyledWrapper>
);

export default Card;
