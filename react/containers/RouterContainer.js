import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavbarContainer from './NavbarContainer';
import FrontpageContainer from './FrontpageContainer';
import ProfileContainer from './ProfileContainer';
import ThreadContainer from './ThreadContainer';
import NotFound from '../components/NotFound';
import SearchContainer from './SearchContainer';
import MainContainer from './MainContainer';

module.exports = (
    <Route>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={FrontpageContainer} />
      </Route>
      <Route path="/_=_" component={MainContainer}>
        <IndexRoute component={FrontpageContainer} />
      </Route>
      <Route path="/404" component={MainContainer}>
        <IndexRoute component={NotFound} />
      </Route>
      <Route path="/search/:query" component={MainContainer} >
        <IndexRoute component={SearchContainer} />
      </Route>
      <Route path="/posts/:post_hash" component={MainContainer} >
        <IndexRoute component={ThreadContainer} />
      </Route>
      <Route path="/user" component={MainContainer} >
        <IndexRoute component={ProfileContainer} />
      </Route>
      <Route path="/user/:userId" component={MainContainer} >
        <IndexRoute component={ProfileContainer} />
      </Route>
    </Route>
);
