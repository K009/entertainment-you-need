import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <Heading>Hello Dominik</Heading>
    </InnerWrapper>

      <Paragraph>
        Lorem ipsum lalala i wanna play piano all the time. This is great! sdasdsadda sad asd sa
        dsad sad as das das da.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
