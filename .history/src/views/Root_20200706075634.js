import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import { Provider } from 'react-redux';
import store from '../store/index';
import Books from './Books';
import Twitters from './Twitters';
import Games from './Games';
import DetailsPage from './DetailsPage';
import { routes } from '../routes/index';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/books" />} />
          <Route exact path={routes.books} component={Books} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.games} component={Games} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
