import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ props }) => props.theme.primary}
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${(
    { secondary }, //jesli pierwsza i druga jest prawdziwa zwraca zawartosc drugiej
  ) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;

//  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
