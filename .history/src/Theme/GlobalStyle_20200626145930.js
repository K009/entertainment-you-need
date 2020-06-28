import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  *, *::before, *::after {
      box-sizing: border-box;
  }
    body{}
`;

export default GlobalStyle;
