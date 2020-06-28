import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};
`;

//V rozszerzenie komponentu o dodatkowy styl

const DataInfo = styled(Paragraph)``;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <Heading>Hello Dominik</Heading>
      <Paragraph>3 days</Paragraph>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>
        Lorem ipsum lalala i wanna play piano all the time. This is great! sdasdsadda sad asd sa
        dsad sad as das das da.
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
