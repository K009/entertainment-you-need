import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  padding: 0;
  background-color: ${({ secondary }) => (secondary ? '#e6e6e6' : '#ffd82b')};
  width: ${({ secondary }) => (secondary ? '105px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '47px')};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
  text-transform: uppercase;

  ${(
    { secondary }, //jesli pierwsza i druga jest prawdziwa zwraca zawartosc drugiej
  ) =>
    secondary &&
    ` 
    
    `}
`;

export default Button;
