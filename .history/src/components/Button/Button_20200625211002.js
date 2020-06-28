import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  padding: 0;
  background-color: ${(secondary) => (secondary ? '#e6e6e6' : '#ffd82b')};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export default Button;
