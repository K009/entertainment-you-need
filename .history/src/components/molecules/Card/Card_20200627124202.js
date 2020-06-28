import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 17px 30px;
`;

const StyledHeadingWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;

const Card = () => (
  <StyledWrapper>
    <StyledHeadingWrapper>
      <Heading>Hello Dominik</Heading>
    </StyledHeadingWrapper>
    <Paragraph>
      Lorem ipsum lalala i wanna play piano all the time. This is great! sdasdsadda sad asd sa dsad
      sad as das das da.
    </Paragraph>
    <Button secondary>Remove</Button>
  </StyledWrapper>
);

export default Card;
