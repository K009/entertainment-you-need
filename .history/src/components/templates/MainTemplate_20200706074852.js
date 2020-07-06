import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';
import PageContext from '../../context/index';

class MainTemplate extends React.Component {
  state = {
    pageType: 'books',
  };

  componentDidMount() {
    //przy odpaleniu strony
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    //aktualizuje bez przeladowania strony
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['books', 'movies', 'games'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page)); //wyciagamy tylko stringa, dzięki []

    if (prevState.pageType !== currentPage) {
      //jesli poprzedni i obecny typ strony jest taki sam to nic nie robi, jak sie roznia to zmienia state
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
