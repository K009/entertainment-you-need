import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

class MainTemplate extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate() {
    this.setCurrentPage();
  }

  setCurrentPage = () => {
    const pageTypes = ['twitters', 'articles', 'notes'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page)); //wyciagamy tylko stringa, dzięki []

    this.setState({ pageType: currentPage });
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
