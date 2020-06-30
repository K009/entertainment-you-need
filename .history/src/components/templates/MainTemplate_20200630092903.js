import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import Sidebar from '../organisms/Sidebar/Sidebar';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <>
        <Sidebar />
        {children}{' '}
      </>
    </ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
