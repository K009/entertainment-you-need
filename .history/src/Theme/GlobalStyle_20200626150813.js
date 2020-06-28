import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  *, *::before, *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
html{
    font-size: 62.5%; //1rem == 16 px 62.5% to 10px
}

body{
    font-size: 1.6rem; //happy reams
    font-family: 'Montserrat' sans-serif;
}
`;

export default GlobalStyle;
